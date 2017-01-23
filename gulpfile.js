var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', () => {
  connect.server({
    root: './',
    livereload: true
  })
})

gulp.task('livereload', () => {
  return gulp.src('./*.html')
    .pipe(connect.reload());
})

gulp.task('watch', () => {
  return gulp.watch('./**/*.*', ['livereload']);
})

gulp.task('default', ['connect', 'watch']);