"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var gulpBemCss = require('gulp-bem-css');
var webp = require('gulp-webp');
var svgmin = require('gulp-svgmin');
var runSequence = require('run-sequence');
var rename = require("gulp-rename");
var del = require('del');
var minify = require('gulp-csso');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var imagemin = require('gulp-imagemin');

gulp.task("style", function() {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    // .pipe(server.stream());
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("source/css"));
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([include()]))
    .pipe(gulp.dest("source"));
});

gulp.task('bem-less', () => {
  return gulp.src('source/*.html')
    .pipe(gulpBemCss({
      folder: 'source/css',
      extension: 'less',
      elementSeparator: '__',
      modifierSeparator: '--'
    }))
    .pipe(gulp.dest('source/css/f'));
});

gulp.task('webp', () => {
  return gulp.src('source/img/*.png')
    .pipe(webp())
    .pipe(gulp.dest('source/webp'))
});

gulp.task('svg-optim', function () {
  return gulp.src('source/img/logo-mobile.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('source/svgo'));
});

gulp.task("images-min", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"));
})
