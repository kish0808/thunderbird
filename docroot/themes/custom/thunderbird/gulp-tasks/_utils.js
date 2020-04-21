var gulpif = require('gulp-if');

module.exports = {
  onDev(task) {
    return gulpif(process.env.CI === undefined, task);
  }
};
