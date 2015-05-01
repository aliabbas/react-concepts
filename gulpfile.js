var gulp = require('gulp'),
  react = require('gulp-react'),
  concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src('src/**')
    .pipe(react())
    .pipe(concat('application.js'))
    .pipe(gulp.dest('dist/'));
});
