'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var browsersync = require('browser-sync').create();
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var cleanCSS = require('gulp-clean-css');
var browserify = require('browserify');
var tsify = require('tsify');
var uncache = require('gulp-uncache');
var gutil = require('gulp-util');

var config = require('../config.js');

gulp.task('build:css', ['clean:css'], function(){
    return gulp.src(config['stylesheet']['srcDir'] + '/*.styl')
        .pipe(plumber())
        .pipe(gulpif(config['stylesheet']['sourcemaps'], sourcemaps.init()))
        .pipe(stylus({
            'compress': config['stylesheet']['compress'],
            'include css': true
        }))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(gulpif(config['stylesheet']['sourcemaps'], sourcemaps.write()))
        .pipe(gulp.dest(config['stylesheet']['destDir']))
});

gulp.task('build:js', function(){
    browserify({
        debug: config['js']['sourcemaps']
    })
        .add(config['js']['srcDir'] + '/main.ts')
        .plugin(tsify, config['js']['tsconfig'])
        .bundle()
        .on('error', function(err){
            console.error(err.message);
            this.emit('end');
        })
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulpif(config['js']['compress'], uglify()))
        .pipe(gulp.dest(config['js']['destDir']));
});

gulp.task('build:image', ['clean:image'], function(){
    return gulp.src([config['image']['srcDir'] + '/**/*.{tiff,jpg,png,gif}'], {base: config['image']['srcDir']})
        .pipe(plumber())
        .pipe(gulp.dest(config['image']['destDir']));
});

gulp.task('build:html', ['build:css', 'build:js', 'build:image', 'build:lib', 'clean:html'], function(){
    return gulp.src(config['html']['srcDir'] + '/*.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(uncache({
            rename: false,
            append: 'hash',
            srcDir: config['html']['destDir']
        }))
        .pipe(gulp.dest(config['html']['destDir']))
});

gulp.task('build', ['build:html']);

gulp.task('build:lib:js', ['clean:lib:js'], function(){
    gulp.src(config['js']['libDir'] + '/*.js')
        .pipe(gulpif(config['js']['sourcemaps'], sourcemaps.init()))
        .pipe(concat('lib.js'))
        .pipe(gulpif(config['js']['compress'], uglify()))
        .pipe(gulpif(config['js']['sourcemaps'], sourcemaps.write()))
        .pipe(gulp.dest(config['js']['destDir']));
});

gulp.task('build:lib:css', ['clean:lib:css'], function() {
    return gulp.src(config['stylesheet']['libDir'] + '/*.css')
        .pipe(plumber())
        .pipe(gulpif(config['stylesheet']['sourcemaps'], sourcemaps.init()))
        .pipe(gulpif(config['stylesheet']['compress'], cleanCSS()))
        .pipe(concat('lib.css'))
        .pipe(gulpif(config['stylesheet']['sourcemaps'], sourcemaps.write()))
        .pipe(gulp.dest(config['stylesheet']['destDir']))
});

gulp.task('build:lib', ['build:lib:js', 'build:lib:css']);

gulp.task('watch-js', ['build:js'], function(){
    gulp.watch(config['js']['srcDir'] + '/*.ts', ['build:js']);
});

gulp.task('watch-css', ['build:css'], function(){
    gulp.watch(config['stylesheet']['srcDir'] + '/*.styl', ['build:css']);
});

gulp.task('watch-html', ['build:html'], function(){
    gulp.watch(config['html']['srcDir'] + '/*.pug', ['build:html']);
});

gulp.task('watch', ['watch-js', 'watch-css', 'watch-html']);

gulp.task('build:css:sync', ['build:css'], function(){browsersync.reload();});
gulp.task('build:js:sync', ['build:js'], function(){browsersync.reload();});
gulp.task('build:html:sync', ['build:html'], function(){browsersync.reload();});

gulp.task('serve-sync', ['build'], function(){
    browsersync.init({
        server: {
            baseDir: './docs'
        }
    });

    function reload(){
        browsersync.reload();
    }

    gulp.watch(config['js']['srcDir'] + '/*.ts', ['build:js:sync']);
    gulp.watch(config['stylesheet']['srcDir'] + '/*.styl', ['build:css:sync']);
    gulp.watch(config['html']['srcDir'] + '/*.pug', ['build:html:sync']);
});