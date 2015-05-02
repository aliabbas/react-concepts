var gulp = require('gulp'), // responsible for build process
  gutil = require('gulp-util'), // responsible for console logging process
  source = require('vinyl-source-stream'), // handling for streaming files through stages
  browserify = require('browserify'), // for require & module loading
  watchify = require('watchify'), // rerun gulp file when a file change save happens
  reactify = require('reactify'); // converting jsx -> js

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'], // start at app.jsx
    transform: [reactify], // compile jsx -> js
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if(file) {
      gutil.log('Recompiling ' + file);
    }
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify error'))
      .pipe(source('main.js')) // put all jsx to js compiled files into main.js
      .pipe(gulp.dest('dist'));
  };

  build()
  bundler.on('update', build); // when a file is changed and saved
});
