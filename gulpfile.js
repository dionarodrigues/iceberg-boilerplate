"use strict";

var gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    clean       = require('gulp-clean'),       
    stylus      = require('gulp-stylus'),
    jeet        = require('jeet'),
    rupture     = require('rupture'),
    koutoSwiss  = require('kouto-swiss'),
    prefixer    = require('autoprefixer-stylus'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'), 
    imagemin    = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    plumber     = require('gulp-plumber'),
    runSequence = require('run-sequence');


// Config
var path = {
    dev: "./src/",
    dest: "./assets/",
    bower: "./bower_components/"
};


// Jade Task 
gulp.task('jade', function() { 
    return gulp.src(path.dev + 'views/*.jade')
    .pipe(jade({
        client: false,
        pretty: true
    }))
    .pipe(gulp.dest('./'));
});


// Wait for jade, then launch the Server
gulp.task('browser-sync', ['jade'], function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});


// Clean all 'dest' directory before generating the files
gulp.task('clean', function() {
    return gulp.src(path.dest + '*')
            .pipe(clean());
});


// Stylus task
gulp.task('stylus', function() {
    return gulp.src(path.dev + 'styl/main.styl')
            .pipe(plumber())
            .pipe(stylus({
                use:[koutoSwiss(), prefixer(), jeet(), rupture()],
                compress: true //--> minify css
            }))
            .pipe(gulp.dest(path.dest + 'css/'))
            .pipe(browserSync.reload({stream:true}))
            .pipe(gulp.dest(path.dest + 'css/'));
});


// Javascript Task
gulp.task('js', function() {
    return gulp.src(path.dev + 'js/**/*.js')
            .pipe(plumber())
            .pipe(concat('main.js'))
            .pipe(uglify()) //--> minify js
            .pipe(gulp.dest(path.dest + 'js/'));
});


// Imagemin Task
gulp.task('imagemin', function() {
    return gulp.src(path.dev +  'img/**/*.{jpg,png,gif}')
            .pipe(plumber())
            .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true, cache: false }))
            .pipe(gulp.dest(path.dest + 'img/'));
});


// Watch stylus files, js files, img files and jade files for changes and recompile
gulp.task('watch', function () {
    gulp.watch(path.dev + 'styl/**/*.styl', ['stylus']);
    gulp.watch(path.dev + 'js/**/*.js', ['js']);
    gulp.watch(path.dev + 'img/**/*.{jpg,png,gif}', ['imagemin']);
    gulp.watch(path.dev + 'views/**/*.jade', ['jade']);
});


// Run Sequence allows you to perform the 'clean' task before others
// It also allows to ascertain the exact time of 'default' with callback
gulp.task('default', function(cb) {
    return runSequence('clean', ['jade', 'js', 'stylus', 'imagemin', 'browser-sync', 'watch'], cb);
});