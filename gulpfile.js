'use strict';

// Load our dependencies.
var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Minify js.
gulp.task('js-min', function() {
  return gulp.src(['app/**/**/**/*.js'])
    .pipe(plug.uglify())
    .pipe(plug.rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

// Minify css.
gulp.task('css-min', function() {
  return gulp.src(['app/**/**/**/*.css'])
    .pipe(plug.cleanCss())
    .pipe(plug.rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('images', function() {
  return gulp.src(['app/**/**/**/*.+(png|jpg|gif|svg)'])
    .pipe(plug.imagemin())
    .pipe(gulp.dest('dist'));
});

// Start the server and watch for file changes.
gulp.task('serve', ['js-min', 'css-min', 'images', 'browserSync'], function() {
  gulp.watch(['app/**/**/**/*.js'], ['js-min', reload]);
  gulp.watch(['app/**/**/**/*.css'], ['css-min', reload]);
  gulp.watch(['index.html', 'app/**/**/*.html'], reload);
});

// Server configuration.
gulp.task('browserSync', function() {
  browserSync({
    port: 8080,
    server: {
      baseDir: ''
    }
  });
});