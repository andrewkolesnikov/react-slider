var gulp = require('gulp');
var jsx = require('gulp-jsx');
var rename = require("gulp-rename");
var bower = require("gulp-bower");
var open = require('gulp-open');

var paths ={
    dist: 'dist/',
    src: 'src/',
    test: 'test/'
};

gulp.task('build', function() {
    return gulp.src(paths.src + '**/*.jsx')
        .pipe(jsx({
          factory: "React.createElement"
        }))
        .pipe( rename(function (path) {
            path.extname = ".js"
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('bower-install', function() {
    return bower({ cmd: 'install'});
});


gulp.task('test',['bower-install', 'build'], function(){
    gulp.src(paths.test + '**/*.html')
        .pipe(open());
});
