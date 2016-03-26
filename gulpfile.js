var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var DEST = './dist/js';
gulp.task('default',function(){
    return gulp.src('./src/js/angular.js')
    .pipe(gulp.dest(DEST))
    .pipe(uglify())
    .pipe(rename({extname:'.min.js'}))
    .pipe(gulp.dest(DEST));
});
gulp.task('webserver',function(){
    connect.server();
});

gulp.task('default',['webserver']);
