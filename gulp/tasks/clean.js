var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean-css', function(){
    return del([config['stylesheet']['destDir'] + '/**/*.css']);
});

gulp.task('clean-js', function(){
    return del([config['js']['destDir'] + '/**/*.js']);
});

gulp.task('clean-image', function(){
    return del([config['image']['destDir'] + '/**/*', '!docs/image/.keep']);
});

gulp.task('clean-html', function(){
    return del([config['html']['destDir'] + '/*.html']);
});

gulp.task('clean', ['clean-css', 'clean-js', 'clean-image', 'clean-html'], function(){
    return true;
});
