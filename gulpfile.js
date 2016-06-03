'use strict';

var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('js-min', function() {
  return gulp.src(['app/**/**/**/*.js'])
    .pipe(plug.uglify())
    .pipe(plug.rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('css-min', function() {
  return gulp.src(['app/**/**/**/*.css'])
    .pipe(plug.cleanCss())
    .pipe(plug.rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['js-min', 'css-min','browserSync'], function() {
  gulp.watch(['app/**/**/**/*.js'], ['js-min', reload]);
  gulp.watch(['app/**/**/**/*.css'], ['css-min', reload]);
});

gulp.task('browserSync', function() {
  browserSync({
    port: 8080,
    server: {
      baseDir: 'app'
    }
  });
});