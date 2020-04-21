module.exports = {
  styles: {
    watch: ['sass/**/*.scss'],
    source: ['sass/*.scss', 'sass/ckeditor/*.scss'],
    destination: 'dist/css/',
    options: {
      outputStyle: 'expanded',
      includePaths: ['./node_modules']
    }
  },
  scripts: {
    watch: ['js/**/*.js'],
    source: ['js/**/*.js'],
    destination: 'dist/js/'
  },
  svg: {
    watch: ['img/svg/*.svg'],
    source: 'img/svg/*.svg',
    destination: 'dist/img/'
  },
  // stylelint: {
  //   options: {
  //     reporters: [
  //       {
  //         formatter: 'string',
  //         console: true
  //       }
  //     ]
  //   },
  //   optionsTest: {
  //     reporters: [
  //       {
  //         formatter: 'string',
  //         console: true,
  //         failAfterError: true
  //       }
  //     ]
  //   }
  // },
  browserSync: {
    proxy: 'http://local.monalisa.com/',
    open: true,
    xip: false,
    logConnections: false
  }
};
