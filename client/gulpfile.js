'use strict';

// DEPENDENCIES
const gulp = require('gulp');
const sass = require('gulp-sass');
const minify = require('gulp-clean-css');
// const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

// SCSS & CSS
const scss_src = './src/assets/style/scss/**/*.scss';
const css_dest = './src/assets/style/css';

// COMPILE SCSS TO CSS

// Create a task within gulp
gulp.task('compile', function() {

    // Create a stream of readable files
    gulp.src(scss_src)
    // Pipe is a method within gulp that allows us to chain tasks together
    // Compile into CSS
    .pipe(sass().on('error', sass.logError))
    // Minify file
    .pipe(minify())
    // Prefix with .min
    .pipe(rename({ suffix: '.min' }))
    // Only effecting changed files
    .pipe(changed(css_dest))
    // Then output to the css file destination
    .pipe(gulp.dest(css_dest));

});

// Detect changes in SCSS
gulp.task('watch', function() {
    // Watching the stream & runs 'compile' function whenever it detects changes
    gulp.watch(scss_src, ['compile']);
});

// Run tasks
gulp.task('default', ['watch']);