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
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var del = require('del');
var gutil = require('gulp-util');
var config = require('../config');


// For temporary testing
gulp.task('build:test:js', function(){
    browserify({
        debug: config['js']['sourcemaps']
    })
        .add(config['js']['srcDir'] + '/test.ts')
        .plugin(tsify, config['js']['tsconfig'])
        .bundle()
        .on('error', function(err){
            console.error(err.message);
            this.emit('end');
        })
        .pipe(source('test.js'))
        .pipe(buffer())
        .pipe(gulp.dest(config['js']['destDir']));
});

gulp.task('build:test:css', function(){
    return gulp.src(config['stylesheet']['srcDir'] + '/test.styl')
        .pipe(plumber())
        .on('error', function(err){
            console.error(err.message);
        })
        .pipe(gulpif(config['stylesheet']['sourcemaps'], sourcemaps.init()))
        .pipe(stylus({
            'compress': config['stylesheet']['compress'],
            'include css': true
        }))
        .pipe(autoprefixer())
        //.pipe(concat('main.css'))
        .pipe(gulpif(config['stylesheet']['sourcemaps'], sourcemaps.write()))
        .pipe(gulp.dest(config['stylesheet']['destDir']))
});

gulp.task('build:test:html', gulp.series('build:test:css', 'build:test:js', function(){
  return gulp.src(config['html']['srcDir'] + '/test.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(uncache({
      rename: false,
      append: 'hash',
      srcDir: config['html']['destDir']
    }))
    .pipe(gulp.dest(config['html']['destDir']))
}));

gulp.task('build:test', gulp.series('build:test:html'));

gulp.task('clean:test:css', function(){
    return del([config['stylesheet']['destDir'] + '/test.css']);
});

gulp.task('clean:test:js', function(){
    return del([config['js']['destDir'] + '/test.js']);
});

gulp.task('clean:test:html', function(){
    return del([config['html']['destDir'] + '/test.html']);
});

gulp.task('clean:test', gulp.series('clean:test:css', 'clean:test:js', 'clean:test:html'));

gulp.task('build:test:sync', gulp.series('build:test', function(){browsersync.reload();}));

gulp.task('serve:test', gulp.series('build:test', function(){
  browsersync.init({
    server: {
      baseDir: './docs',
      index: 'test.html'
    }
  });
  
  gulp.watch(config['js']['srcDir'] + '/test.ts', ['build:test:sync']);
  gulp.watch(config['stylesheet']['srcDir'] + '/test.styl', ['build:test:sync']);
  gulp.watch(config['html']['srcDir'] + '/test.pug', ['build:test:sync']);
}));
