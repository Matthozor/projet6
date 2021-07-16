'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
sass.compiler = require('node-sass');
    var concat = require('gulp-concat');
    var sourcemaps = require('gulp-sourcemaps');


function makeCss() {
  return gulp.src(["./sass/base.scss", "./sass/mixin.scss", './sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

function watch() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("./**/*.scss", makeCss);
  gulp.watch(["./**/*.html", "./css/*.css", "./**/*.js"]).on('change', browserSync.reload);
}

module.exports.watch = watch;
module.exports.makeCss = makeCss;