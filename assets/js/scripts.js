(global => {

    'use strict';

    // #pragma mark FILE: globals.js
    const
        PLANS_REGEX = /(two_person|family)/ig,
        WEEK_REGEX = /(\d{4})_(\d{2})_(\d{2})/g,
        DEFAULT_WEEK = '2016_03_21',
        DEFAULT_PLAN = 'two_person',
        IMAGE_PLACEHOLDER = 'assets/images/placeholder.jpg';

    // #pragma mark FILE: template-helpers.js
    Handlebars.registerHelper('friendly', value => {
        return value
            // Plans
            .replace(PLANS_REGEX, (match, $1) => $1.replace('_', ' '))
            // Dates
            .replace(WEEK_REGEX, '$1-$2-$3');
    });

    Handlebars.registerHelper('url', value => global.URL.getUrlForPlan(value));

    // #pragma mark FILE: url.js
    // let data = global.data; // <-- used when in a separate file
    class URLHandler {
        constructor() {
            $(window).on('hashchange', this.onChange);

            // URL Structure: /:plan/:date
            if (location.hash) {
                this.onChange();
            } else {
                data.plans.forEach(plan => plan.isActive = plan.value === DEFAULT_PLAN);
                data.weeks.forEach(week => week.isActive = week.value === DEFAULT_WEEK);
                this.redirect(this.getCurrentUrl());
            }
        }

        onChange() {
            let params = location.hash.split('#/')[1].split('/');
            data.plans.forEach(plan => plan.isActive = plan.value === params[0]);
            data.weeks.forEach(week => week.isActive = week.value === params[1]);
            // parseTemplates execution needs to be async in order not to block the `url` handlebars helper
            // on pageload with a hash already defined
            setTimeout(global.parseTemplates, 4);
            setTimeout(global.loadRecipes, 4);
        }

        getActiveValue(type) {
            return data[type].filter(item => item.isActive)[0].value;
        }

        getCurrentUrl() {
            return '/' + this.getActiveValue('plans') + '/' + this.getActiveValue('weeks');
        }

        getUrlForPlan(plan) {
            return this.getCurrentUrl().replace(PLANS_REGEX, plan);
        }

        getUrlForWeek(week) {
            return this.getCurrentUrl().replace(WEEK_REGEX, week);
        }

        // Easier for refactoring when we change from hash to pushState :-)
        redirect(url) {
            if (url !== location.hash) {
                location.hash = url;
                this.onChange();
            }
        }
    }

    // #pragma mark FILE: api.js
    class APIHandler {
        constructor() {}

        getWine(id) {
            // Based on data samples provided, wine pairings, even though it's an array, seems to only return 1 pairing.
            return $.getJSON('/api/product_pairings/' + id)
                .then(data => data.product_pairings[0].paired_product.producible.wine);
        }

        getRecipes() {
            let plan = URL.getActiveValue('plans'),
                week = URL.getActiveValue('weeks');

            return $.getJSON('/api/recipes/' + plan + '/' + week)
                .then(data => data[plan + '_plan'].recipes)
                .then(recipes => recipes.map(obj => obj.recipe));
        }

        // First challenge: week and recipe in the spec weren't in the expected format.
        // Since they'll be hardcoded, don't need a normalizer function.
        // `getWeeks()` and `getPlans()` could come from back-end as well.
        getWeeks() {
            return [{
                value: '2016_03_21'
            }, {
                value: '2016_03_28'
            }];
        }

        getPlans() {
            return [{
                value: 'two_person'
            }, {
                value: 'family'
            }];
        }
    }

    // #pragma mark FILE: app.js

    global.init = () => {
        // Don't run these twice.
        if (global._initialized) {
            return;
        }

        global.bindEvents();
        global._initialized = true;
    };

    global.bindEvents = () => {
        // Delegation since DOM is constantly being updated
        $(document)
            .on('change', '.week-dropdown', () => URL.redirect(URL.getUrlForWeek($('.week-dropdown').val())))
            .on('click', '[data-wine]', global.openWineModal);
    };

    global.parseTemplates = function parseTemplates() {
        let $templated = $('[data-template]'),
            _snapshot_data = JSON.stringify(data);

        $templated.each((i, element) => {
            let $element = $(element),
                key = $element.data('template'),
                template = global.templates[key],
                dataHasChanged = $element.data('_snapshot_data') !== _snapshot_data;

            // dataHasChanged could be optimized by checking only against variables each template uses
            // that would require using data[key] instead of a global `data` containing all variables

            if (typeof template === 'function' && dataHasChanged) {
                $element.html(template(data)).data('_snapshot_data', _snapshot_data);
            } else if (typeof template !== 'function') {
                console.warn('Trying to use template `' + key + '` without defining it.');
            }
        });

        global.init();
    };

    global.openWineModal = function openWineModal(evt) {
        evt.preventDefault();
        API.getWine($(this).data('wine')).then(wine => {
            wine.varietal = wine.varietals[0].name;
            // currently returning only one, but could scale
            // also helpful for context-switching within handlebars, until tempaltes get template-scoped data
            // instead of global data (all templates currently get all data)
            data.wines = [wine];
            global.parseTemplates();
            $('.wine-modal').modal('show');
        });
    };

    // Display all the recipes using the default settings.
    global.loadRecipes = function loadRecipes() {
        API.getRecipes().then(recipes => {
            // Break every 3rd item, and not on the last item (in case 3n total items)
            recipes.forEach((recipe, i) => recipe.break = i % 3 === 2 && i !== recipes.length - 1);

            data.recipes = recipes;
            global.parseTemplates();
        });
    };

    let API = global.API = new APIHandler();

    let data = {
        plans: API.getPlans(),
        weeks: API.getWeeks(),
        recipes: [],
        wines: []
    };

    let URL = global.URL = new URLHandler();

    // Spec did not mention to put `page-title` which is in the examples markup.

})(BA || {});