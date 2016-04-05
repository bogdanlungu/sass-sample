var gulp = require('gulp'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    neat = require('node-neat').includePaths;
    concat = require('gulp-concat');

var paths = {
    scss: './scss/*.scss'
};

gulp.task('sass', function() {
    gulp.src('./scss/main.scss')
        .pipe(sass({
          includePaths: ['styles'].concat(neat)
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
