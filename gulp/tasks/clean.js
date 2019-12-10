var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean:css', function(){
    return del([config['stylesheet']['destDir'] + '/main.css']);
});

gulp.task('clean:css:raw', function(){
    return del([config['stylesheet']['destDir'] + '/raw/**/*']);
});

gulp.task('clean:js', function(){
    return del([config['js']['destDir'] + '/main.js']);
});

gulp.task('clean:js:raw', function(){
    return del([config['js']['destDir'] + '/raw/**/*']);
});

gulp.task('clean:image', function(){
    return del([config['image']['destDir'] + '/**/*', '!docs/image/.keep']);
});

gulp.task('clean:html', function(){
    return del([config['html']['destDir'] + '/*.html']);
});

gulp.task('clean:html:raw', function(){
    return del([config['html']['destDir'] + '/raw/**/*']);
});

gulp.task('clean:lib:js', function(){
    return del([config['js']['destDir'] + '/lib.js']);
});

gulp.task('clean:lib:css', function(){
    return del([config['stylesheet']['destDir'] + '/lib.css']);
});

gulp.task('clean:lib', gulp.series('clean:lib:js', 'clean:lib:css'));

gulp.task('clean', gulp.series('clean:css', 'clean:js', 'clean:image', 'clean:html', 'clean:lib', function(){
    return true;
}));
