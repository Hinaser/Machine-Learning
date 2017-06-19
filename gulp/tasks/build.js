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
var gutil = require('gulp-util');

var config = require('../config.js');

gulp.task('build:css', ['clean:css'], function(){
    return gulp.src(config['stylesheet']['srcDir'] + '/main.styl')
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

gulp.task('build:js', ['clean:js'], function(){
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

gulp.task('build:image', /*['clean:image'],*/ function(){ // gulp-changed cannot be used with clean
    return gulp.src([config['image']['srcDir'] + '/**/*.{tiff,jpg,png,gif}'], {base: config['image']['srcDir']})
        .pipe(plumber())
        .pipe(newer(config['image']['destDir']))
        .pipe(gulp.dest(config['image']['destDir']));
});

gulp.task('build:html', ['build:css', 'build:js', 'build:image', 'build:lib', 'build:raw', 'clean:html'], function(){
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

gulp.task('build:html:only', ['build:css', 'build:image'], function(){
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

gulp.task('build:lib:js', /*['clean:lib:js'],*/ function(){ // clean:lib:js cannot be used with gulp-newer
    return gulp.src(config['js']['libDir'] + '/*.js')
        .pipe(plumber())
        .pipe(newer(config['js']['destDir'] + '/lib.js'))
        .pipe(gulpif(config['js']['sourcemaps'], sourcemaps.init()))
        .pipe(concat('lib.js'))
        .pipe(gulpif(config['js']['compress'], uglify()))
        .pipe(gulpif(config['js']['sourcemaps'], sourcemaps.write()))
        .pipe(gulp.dest(config['js']['destDir']));
});

gulp.task('build:lib:css', /*['clean:lib:css'],*/ function() { // clean:lib:css cannot be used with gulp-newer
    return gulp.src(config['stylesheet']['libDir'] + '/*.css')
        .pipe(plumber())
        .pipe(newer(config['stylesheet']['destDir'] + '/lib.css'))
        .pipe(gulpif(config['stylesheet']['sourcemaps'], sourcemaps.init()))
        .pipe(gulpif(config['stylesheet']['compress'], cleanCSS()))
        .pipe(concat('lib.css'))
        .pipe(gulpif(config['stylesheet']['sourcemaps'], sourcemaps.write()))
        .pipe(gulp.dest(config['stylesheet']['destDir']))
});

gulp.task('build:lib', ['build:lib:js', 'build:lib:css']);

gulp.task('build:css:raw', /*['clean:css:raw'],*/ function(){
    return gulp.src(config['stylesheet']['rawDir'] + '/**/*.css')
        .pipe(plumber())
        .pipe(newer(config['stylesheet']['destDir'] + '/raw'))
        .pipe(gulpif(config['stylesheet']['compress'], cleanCSS()))
        .pipe(gulp.dest(config['stylesheet']['destDir'] + '/raw'));
});

gulp.task('build:js:raw', /*['clean:js:raw'],*/ function(){
    return gulp.src(config['js']['rawDir'] + '/**/*.js')
        .pipe(plumber())
        .pipe(newer(config['js']['destDir'] + '/raw'))
        .pipe(gulpif(config['js']['compress'], uglify()))
        .pipe(gulp.dest(config['js']['destDir'] + '/raw'));
});

gulp.task('build:html:raw', ['clean:html:raw'], function(){
    return gulp.src(config['html']['rawDir'] + '/**/*.html')
        .pipe(plumber())
        .pipe(gulp.dest(config['html']['destDir'] + '/raw'));
});

gulp.task('build:raw', ['build:js:raw', 'build:css:raw', 'build:html:raw']);

gulp.task('watch-js', ['build:js'], function(){
    gulp.watch(config['js']['srcDir'] + '/**/*.ts', ['build:js']);
});

gulp.task('watch-css', ['build:css'], function(){
    gulp.watch(config['stylesheet']['srcDir'] + '/**/*.styl', ['build:css']);
});

gulp.task('watch-html', ['build:html'], function(){
    gulp.watch(config['html']['srcDir'] + '/**/*.pug', ['build:html']);
});

gulp.task('watch', ['watch-js', 'watch-css', 'watch-html']);

gulp.task('build:html:sync', ['build:html'], function(){browsersync.reload();});
gulp.task('build:html:only:sync', ['build:html:only'], function(){browsersync.reload();});

gulp.task('serve:dev', ['build'], function(){
    browsersync.init({
        server: {
            baseDir: './docs'
        }
    });

    gulp.watch(config['js']['srcDir'] + '/**/*.ts', ['build:html:sync']);
    gulp.watch(config['stylesheet']['srcDir'] + '/**/*.styl', ['build:html:sync']);
    gulp.watch(config['html']['srcDir'] + '/**/*.pug', ['build:html:sync']);
});

// Only watches/compiles .pug files
gulp.task('serve:dev:html', ['build:html:only'], function(){
    browsersync.init({
        server: {
            baseDir: './docs'
        }
    });

    gulp.watch(config['html']['srcDir'] + '/**/*.pug', ['build:html:only:sync']);
    gulp.watch(config['stylesheet']['srcDir'] + '/**/*.styl', ['build:html:only:sync']);
});