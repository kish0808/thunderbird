const utils = require('./_utils');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const filter = require('gulp-filter');


module.exports = function scripts(gulp, config, bs) {
  gulp.task('scripts', () => {
    const filterFile = filter(['**', '!js/component/*.js'], {restore: true, passthrough: false});
    const stream = gulp
      .src(config.scripts.source)
      .pipe(utils.onDev(plumber()))
      .pipe(sourcemaps.init())
      .pipe(filterFile)
      .pipe(concat('global.js'))
      .pipe(sourcemaps.write())
      .pipe(utils.onDev(plumber.stop()))
      .pipe(gulp.dest(config.scripts.destination))
      .pipe(utils.onDev(bs.stream()));
      filterFile.restore
      .pipe(gulp.dest(config.scripts.destination));
    return stream;
  });
};
