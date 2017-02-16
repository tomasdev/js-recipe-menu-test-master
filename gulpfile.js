var gulp = require('gulp'),
    handlebars = require('gulp-handlebars'),
    wrap = require('gulp-wrap'),
    declare = require('gulp-declare'),
    concat = require('gulp-concat'),
    handlebars4 = require('handlebars');

gulp.task('templates', function () {
    gulp.src('templates/*.hbs')
        .pipe(handlebars({
            handlebars: handlebars4
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'BA.templates',
            noRedeclare: true,
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('assets/js/'));
});

gulp.task('watch', function () {
    gulp.watch('templates/**/*.hbs', ['templates']);
});