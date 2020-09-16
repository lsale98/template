const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const minify = require('gulp-minify');
const imagemin = require('gulp-imagemin');

const { dest } = require('gulp');

gulp.task('styles', () => {
  return gulp
    .src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('clean', () => {
  return del(['build/css/main.css', 'build/js/app-min.js']);
});

gulp.task('scripts', () => {
  return gulp
    .src('src/js/**/*.js')
    .pipe(minify({ noSource: true }))
    .pipe(dest('build/js/'));
});

gulp.task('images', () => {
  return gulp
    .src('src/images/**/*')
    .pipe(imagemin())
    .pipe(dest('build/images/'));
});

gulp.task('default', gulp.series(['clean', 'styles', 'scripts', 'images']));

gulp.task('watch', () => {
  gulp.watch(['src/sass/**/*.scss', 'src/js/**/*.js'], (done) => {
    gulp.series(['clean', 'styles', 'scripts'])(done);
  });
});
