this["BA"] = this["BA"] || {};
this["BA"]["templates"] = this["BA"]["templates"] || {};
this["BA"]["templates"]["navigation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <li class=\"text-capitalize"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isActive : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><a class=\"link-update\" href=\"#"
    + alias3((helpers.url || (depth0 && depth0.url) || alias2).call(alias1,(depth0 != null ? depth0.value : depth0),{"name":"url","hash":{},"data":data}))
    + "\">"
    + alias3((helpers.friendly || (depth0 && depth0.friendly) || alias2).call(alias1,(depth0 != null ? depth0.value : depth0),{"name":"friendly","hash":{},"data":data}))
    + "</a></li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " active";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <option"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isActive : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((helpers.friendly || (depth0 && depth0.friendly) || alias2).call(alias1,(depth0 != null ? depth0.value : depth0),{"name":"friendly","hash":{},"data":data}))
    + "</option>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"row main-navigation\">\n    <div class=\"col-md-4\">\n        <ul class=\"nav nav-pills\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.plans : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n\n    <div class=\"col-md-4 col-md-offset-4\">\n        <select class=\"form-control week-dropdown\">\n            <!-- Removed selected from the placeholder, as even without one selected, there's a default week -->\n            <option value=\"\" disabled hidden>Choose a week...</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.weeks : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\n    </div>\n</div>";
},"useData":true});
this["BA"]["templates"]["recipes"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-md-4\">\n        <div class=\"recipe\">\n            <img class=\"recipe__img\" src=\""
    + alias4(((helper = (helper = helpers.high_menu_thumb_url || (depth0 != null ? depth0.high_menu_thumb_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"high_menu_thumb_url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n\n            <div class=\"recipe__description\">\n                <h2 class=\"recipe__title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n                <h3 class=\"recipe__subtitle\">"
    + alias4(((helper = (helper = helpers.sub_title || (depth0 != null ? depth0.sub_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sub_title","hash":{},"data":data}) : helper)))
    + "</h3>\n            </div>\n\n            "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.vegetarian : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.wine_pairing_id : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["break"] : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "<img src=\"/assets/images/icon-veg.png\" class=\"icon-veg mr-5\" alt=\"Vegetarian\">";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <button class=\"btn btn-default\" data-wine=\""
    + container.escapeExpression(((helper = (helper = helpers.wine_pairing_id || (depth0 != null ? depth0.wine_pairing_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"wine_pairing_id","hash":{},"data":data}) : helper)))
    + "\">\n                <img class=\"icon-wine mr-5\" src=\"/assets/images/icon-wine.png\" alt=\"\">\n                View Wine Pairing\n            </button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "</div><div class=\"row\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row recipes__row\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
this["BA"]["templates"]["wine"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"wine\">\n    <h2 class=\"wine__title text-center\">\n        <img class=\"mr-10\" src=\"assets/images/icon-wine-lg.png\" alt=\"\">\n        "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.varietal || (depth0 != null ? depth0.varietal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"varietal","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "\n    </h2>\n\n    <div class=\"row\">\n        <div class=\"col-md-4 text-center\">\n            <img class=\"mr-10 img-responsive\" src=\""
    + alias4(((helper = (helper = helpers.bottle_image_url || (depth0 != null ? depth0.bottle_image_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bottle_image_url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"col-md-8\">\n            <h4>Description</h4>\n            <p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n\n            <div class=\"fun-fact\">\n                <h4 class=\"fun-fact__title\">Fun Fact</h4>\n                <p>"
    + alias4(((helper = (helper = helpers.fun_facts || (depth0 != null ? depth0.fun_facts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fun_facts","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.wines : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});