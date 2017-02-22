'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var tsify = require('tsify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var glob = require('glob');
var pug = require('gulp-pug');
var browsersync = require('browser-sync');
var plumber = require('gulp-plumber');

var config = require('../config.js');

var cssSrcdir = function(arr){
    var srcDir = config['stylesheet']['srcDir'];
    return [srcDir, arr.join('/')].join('/');
};
var cssDstdir = function(arr){
    return config['stylesheet']['destDir'];
};

gulp.task('build-css', ['clean-css'], function(){
    return gulp.src([cssSrcdir(['global.styl']), cssSrcdir(['local', '*.styl'])])
        .pipe(plumber())
        .pipe(gulpif(config['stylesheet']['sourcemaps'], sourcemaps.init()))
        .pipe(stylus({
            'compress': config['stylesheet']['compress'],
            'include css': true
        }))
        .pipe(autoprefixer())
        .pipe(gulpif(config['stylesheet']['sourcemaps'], sourcemaps.write()))
        .pipe(gulp.dest(cssDstdir))
});

gulp.task('build-js-global', function(){
    var bundle = makeBundle(config['js']['srcDir'] + "/global.ts", config['js']['destDir'], 'global.js');
    return bundle();
});

gulp.task('build-js-local', function(){
    var files = glob.sync(config['js']['srcDir'] + '/local/*.ts');

    files.forEach(function(file){
        var filename = file.split('/')[file.split('/').length-1];
        var filename_without_ext = filename.substr(0, filename.length-3);
        var dst = filename_without_ext + '.js';
        var bundle = makeBundle(file, config['js']['destDir'], dst);
        bundle();
    });
});

gulp.task('build-js', ['build-js-global', 'build-js-local']);

gulp.task('build-image', ['clean-image'], function(){
    return gulp.src([config['image']['srcDir'] + '/**/*.{tiff,jpg,png,gif}'], {base: config['image']['srcDir']})
        .pipe(plumber())
        .pipe(gulp.dest(config['image']['destDir']));
});

gulp.task('build-html', ['clean-html'], function(){
    return gulp.src(config['html']['srcDir'] + '/*.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest(config['html']['destDir']))
});

gulp.task('build', ['build-css', 'build-js', 'build-image', 'build-html'], function(){
});

gulp.task('watch-js', ['build-js'], function(){
    gulp.watch(config['js']['srcDir'] + '/global.ts', ['build-js-global']);
    gulp.watch(config['js']['srcDir'] + '/local/*.ts', ['build-js-local']);
    gulp.watch(config['js']['srcDir'] + '/common/*.ts', ['build-js']);
});

gulp.task('watch-css', ['build-css'], function(){
    gulp.watch(config['stylesheet']['srcDir'] + '/**/*.styl', ['build-css']);
});

gulp.task('watch-html', ['build-html'], function(){
    gulp.watch(config['html']['srcDir'] + '/*.pug', ['build-html']);
});

gulp.task('watch', ['watch-js', 'watch-css', 'watch-html']);

function makeBundle(srcPath, dstDir, dstFile){
    return function() {
        return browserify({
            debug: config['js']['sourcemaps']
        })
            .add(srcPath)
            .plugin(tsify, config['js']['tsconfig'])
            .bundle()
            .on('error', function (err) {
                console.log(err.message);
                this.emit('end');
            })
            .pipe(source(dstFile))
            .pipe(buffer())
            .pipe(gulpif(config['js']['compress'], uglify()))
            .pipe(gulp.dest(dstDir));
    }
}
