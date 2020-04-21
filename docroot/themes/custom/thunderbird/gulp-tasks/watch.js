module.exports = function watch(gulp, config) {
  gulp.task('watch', () => {
    gulp.watch(
      [...config.styles.watch, ...config.scripts.watch, ...config.svg.watch],
      gulp.series(
        gulp.parallel('styles:lint', 'scripts:lint'),
        gulp.parallel('svg', 'styles', 'scripts')
      )
    );
  });
};
