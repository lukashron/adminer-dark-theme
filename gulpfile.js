'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
    sass.compiler = require('node-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

// Source path
const SOURCE = './src/scss/**/*.scss';

gulp.task('sass', function () {
    return gulp.src(SOURCE)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch(SOURCE, gulp.series('sass'));
});