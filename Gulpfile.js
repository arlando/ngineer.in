'use strict';

var gulp = require('gulp');
var app = require('./server');
var browserify = require('browserify');
var livereload = require('gulp-livereload');
var lrserver = livereload('0.0.0.0:1338');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    return browserify({
        entries: ['./js/main.js'],
        extensions: ['.handlebars'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    })
        .bundle()
        .pipe(source('./js/main.js'))
        .pipe(gulp.dest('./public/'))
});

gulp.task('default', ['browserify'], function() {
    gulp.watch(['js/**'], ['browserify']);

    //reload server when assets are updated
    gulp.watch(['./static/build/**', './templates/**', './html/**']).on('change', function (file) {
        lrserver.changed(file.path);
    });
});