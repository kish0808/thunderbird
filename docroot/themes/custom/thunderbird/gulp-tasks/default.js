module.exports = function main(gulp) {
  return gulp.task(
    'default',
    gulp.series(
      gulp.parallel('styles', 'scripts', 'svg')
    )
  );
};
