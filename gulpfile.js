'use strict';

// Load our dependencies.
var gulp = require('gulp');
var htmlMin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var imageMin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var del = require('del');
var reload = browserSync.reload;
var port = 8080;

// Minify HTML
gulp.task('html-min', function() {
  return gulp.src(['src/**/*.html'])
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

// Minify JS
gulp.task('js-min', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Minify CSS
gulp.task('css-min', function() {
  return gulp.src(['src/**/*.css'])
    .pipe(cleanCss())
    .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('images', function() {
  return gulp.src(['src/**/*.+(png|jpg|gif|svg)'])
    .pipe(imageMin())
    .pipe(gulp.dest('dist'));
});

// Set files to watch for updates
gulp.task('watch', function() {
  gulp.watch(['src/**/*.js'], ['js-min', reload]);
  gulp.watch(['src/**/*.css'], ['css-min', reload]);
  gulp.watch(['src/**/*.html'], ['html-min', reload]); 
});

// Start the server with src files.
gulp.task('serve:src', ['default', 'watch'], function() {
  browserSync({
    port: port,
    server: {
      baseDir: 'src'
    }
  });
});

// Start the server with dist files.
gulp.task('serve:dist', ['default', 'watch'], function() {
  browserSync({
    port: port,
    server: {
      baseDir: 'dist'
    }
  });
});

// The default gulp task.
// Build production files into the 'dist' directory.
gulp.task('default', ['clean'], function() {
  runSequence('images', 'js-min', 'css-min', 'html-min');
});

// Clean output directory.
gulp.task('clean', function() {
  return del(['dist/*', '!dist/.git']);
});
