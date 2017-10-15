const gulp = require('gulp');
const minifyCSS = require('gulp-csso');


gulp.task("default", function(){
    return gulp.src("./assets/css/*.css")
        .pipe(minifyCSS())
        .pipe(gulp.dest("./assets/build/css"))

});

/*gulp.task("default", ()=>{
    gulp.watch('./assets/css/*.css', ['minifycss']);
});*/


/*gulp.task('html', function(){
  return gulp.src('client/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
});*/

/*gulp.task('css', function(){
  return gulp.src('client/templates/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});*/

//gulp.task('default', [ 'html', 'css' ]);

// _ The most important methods of gulp
//gulp.task();
//gulp.src();
//gulp.dest();
//gulp.watch();
