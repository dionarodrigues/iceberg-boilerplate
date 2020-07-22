

const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const jeet = require('jeet');
const rupture = require('rupture');
const rucksack = require('gulp-rucksack');
const prefixer = require('autoprefixer-stylus');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const del = require('del');
const imagemin = require('gulp-imagemin');
const browsersync = require('browser-sync');

const { reload } = browsersync;
const plumber = require('gulp-plumber');


// Paths
const paths = {
  dev: './src/',
  dest: './build/assets/',
  build: 'build/**/*',
};

const srcPaths = {
  js: `${paths.dev}js/*.js`,
  jsModules: `${paths.dev}js/modules/**/*.js`,

  css: `${paths.dev}styl/**/*.styl`,
  styl: `${paths.dev}styl/main.styl`,

  pug: `${paths.dev}views/**/*.pug`,
  pugPages: `${paths.dev}views/pages/**/*.pug`,

  img: `${paths.dev}img/**/*.{jpg,png,gif,svg}`,
  fonts: `${paths.dev}fonts/*`,
};

const buildPaths = {
  build: `${paths.dest}**/*`,
  js: `${paths.dest}js/`,
  css: `${paths.dest}css/`,
  pug: './build/',
  img: `${paths.dest}img`,
  fonts: `${paths.dest}css/fonts`,
};

// Clean all 'dest' directory before generating the files
function clean() {
  return del([buildPaths.build]);
}

// Pug Task
function html() {
  return gulp
    .src(srcPaths.pugPages)
    .pipe(plumber())
    .pipe(pug({
      client: false,
      pretty: true,
    }))
    .pipe(gulp.dest(buildPaths.pug))
    .pipe(reload({ stream: true }));
}

// CSS task
function css() {
  return gulp
    .src(srcPaths.styl)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: [prefixer(), jeet(), rupture()],
    }))
    .pipe(rucksack())
    .pipe(concat('main.css'))
    .pipe(gulp.dest(buildPaths.css))
    .pipe(cssnano()) // --> minify css
    .pipe(rename({ suffix: '.min' }))
    .pipe(browsersync.reload({ stream: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(buildPaths.css))
    .pipe(reload({ stream: true }));
}

// Fonts task
function fonts() {
  return gulp.src(srcPaths.fonts)
    .pipe(plumber())
    .pipe(gulp.dest(buildPaths.fonts))
    .pipe(reload({ stream: true }));
}

// Javascript Task
function js() {
  return gulp.src([srcPaths.jsModules, srcPaths.js])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env'],
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(buildPaths.js))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(browsersync.reload({ stream: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(buildPaths.js))
    .pipe(reload({ stream: true }));
}

// Img Task
function images() {
  return gulp.src(srcPaths.img)
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 5, progressive: true, interlaced: true, cache: false,
    }))
    .pipe(gulp.dest(buildPaths.img))
    .pipe(reload({ stream: true }));
}

// Watch stylus files, js files, img files and pug files for changes and recompile
function watchFiles() {
  gulp.watch(srcPaths.css, css);
  gulp.watch([srcPaths.jsModules, srcPaths.js], js);
  gulp.watch(srcPaths.img, images);
  gulp.watch(srcPaths.pug, html);
}

// Launch the Server
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './build',
    },
    open: true,
  });
  done();
}

// Define complex tasks
const build = gulp.series(clean, gulp.parallel(html, css, images, fonts, js));
const watch = gulp.parallel(build, watchFiles, browserSync);

// Default and Build tasks
exports.build = build;
exports.watch = watch;
exports.default = watch;
