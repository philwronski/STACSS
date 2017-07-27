// Requires
var gulp = require('gulp');

// Include plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
// var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var SRC = './sass/';
var DEST = './css/';
var FILENAME = 'stacss';

// tâche CSS = compile vers knacss.css et knacss-unminified.css
gulp.task('dev', function () {
  return gulp.src(SRC + FILENAME + '.scss')
    .pipe(sass({
      outputStyle: 'expanded' // CSS non minifiée plus lisible ('}' à la ligne)
    }))
    .pipe(autoprefixer())
    .pipe(rename(FILENAME + '.css'))
    .pipe(gulp.dest(DEST))
    .pipe(rename(FILENAME + '-min.css'))
    //.pipe(sourcemaps.init())
    .pipe(minifycss())
    //.pipe(sourcemaps.write('.', {includeContent: false}))
    .pipe(gulp.dest(DEST));
});

// Watcher
gulp.task('watch', function() {
  gulp.watch([SRC + '/**/*.scss'], ['dev']);
});


gulp.task('default', ['dev']);