"use strict";

const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const jeet = require('jeet');
const rupture = require('rupture');
const koutoSwiss = require('kouto-swiss');
const rucksack = require('gulp-rucksack');
const prefixer = require('autoprefixer-stylus');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const runSequence = require('run-sequence');
const del = require('del');

// Paths
const paths = {
  dev: './src/',
  dest: './build/assets/',
  build: 'build/**/*'
};

const srcPaths = {
  js: paths.dev + 'js/*.js',
  jsModules: paths.dev + 'js/modules/**/*.js',

  css: paths.dev + 'styl/**/*.styl',
  styl: paths.dev + 'styl/main.styl',

  pug: paths.dev + 'views/**/*.pug',
  pugPages: paths.dev + 'views/pages/**/*.pug',

  img: paths.dev + 'img/**/*.{jpg,png,gif,svg}',
  fonts: paths.dev + 'fonts/*',
};

const buildPaths = {
  build: paths.dest + '**/*',
  js: paths.dest + 'js/',
  css: paths.dest + 'css/',
  pug: './build/',
  img: paths.dest + 'img',
  fonts: paths.dest + 'css/fonts',
};

// Clean all 'dest' directory before generating the files
gulp.task('clean', () => {
  return del( paths.build );
});[
  '/path/to/app.js',
  '/path/to/mymodule/mymodule.js',
  '/path/to/mymodule/mymodule/*.js'
]

// Pug Task
gulp.task('html', () => {
  return gulp.src(srcPaths.pugPages)
    .pipe(plumber())
    .pipe(pug({
      client: false,
      pretty: true
    }))
    .pipe(gulp.dest(buildPaths.pug))
    .pipe(reload({ stream: true }));
});

// CSS task
gulp.task('css', () => {
  return gulp.src(srcPaths.styl)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: [koutoSwiss(), prefixer(), jeet(), rupture()]
    }))
    .pipe(rucksack())
    .pipe(cssnano()) //--> minify css
    .pipe(browserSync.reload({ stream: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(buildPaths.css))
    .pipe(reload({ stream: true }));
});

// Fonts task
gulp.task('fonts', () => {
  return gulp.src(srcPaths.fonts)
    .pipe(plumber())
    .pipe(gulp.dest(buildPaths.fonts))
    .pipe(reload({ stream: true }));
});

// Javascript Task
gulp.task('js', () => {
  return gulp.src([srcPaths.jsModules, srcPaths.js])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(browserSync.reload({ stream: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(buildPaths.js))
    .pipe(reload({ stream: true }));
});

// Img Task
gulp.task('img', () => {
  return gulp.src(srcPaths.img)
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true, cache: false }))
    .pipe(gulp.dest(buildPaths.img))
    .pipe(reload({ stream: true }));
});

// Watch stylus files, js files, img files and pug files for changes and recompile
gulp.task('watch', () => {
  watch(srcPaths.css, batch(function (event, done) {
    gulp.start('css', done);
  }));

  watch([srcPaths.jsModules, srcPaths.js], batch(function (event, done) {
    gulp.start('js', done);
  }));

  watch(srcPaths.img, batch(function (event, done) {
    gulp.start('img', done);
  }));

  watch(srcPaths.pug, batch(function (event, done) {
    gulp.start('html', done);
  }));
});

// Wait for html, then launch the Server
gulp.task('browser-sync', ['html'], () => {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });
});

// Default and Build tasks
gulp.task('build', ['clean'], () => {
  gulp.start(
    'html',
    'js',
    'css',
    'img',
    'fonts'
  );
});

gulp.task('default', ['build'], () => {
  gulp.start(
    'watch',
    'browser-sync'
  );
});
