var gulp = require("gulp");
var del = require("del");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var minifyCSS = require("gulp-minify-css");
var minifyHTML = require("gulp-minify-html");
var imagemin = require("gulp-imagemin");
var templateCache = require("gulp-angular-templatecache");
var webserver = require("gulp-webserver");
var watch = require("gulp-watch");
var runsequence = require("run-sequence");
var browserify = require("browserify");
var eslint = require("gulp-eslint");


var path = {
    HTML: [
        './app/*.html',
        './app/**/*.html'
    ],
    JS: [
        './app/*.js',
        './app/**/*.js'
    ],
    SASS: ['./app/**/*.scss'],
    IMG: [],
    VENDOR: ['./node_modules'],
    DIST: './dist',
    APP_ROOT: ['./app'],
}

gulp.task("clean",[],function(){
    del([
        path.DIST+"/*.*"
    ])
});

gulp.task("test",["clean"],function(){
    
});
