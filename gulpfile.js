"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
const gulpBemCss = require('gulp-bem-css');
const webp = require('gulp-webp');

gulp.task("style", function() {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
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
