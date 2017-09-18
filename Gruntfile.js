'use strict';

module.exports = function (grunt) {
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    removelogging: 'grunt-remove-logging',
    filehash: 'grunt-file-hash'
  });

  var paths     = require('./config/_paths');
  var clean     = require('./config/tasks/clean');
  var copy      = require('./config/tasks/copy');
  var compass   = require('./config/tasks/compass');
  var htmlmin   = require('./config/tasks/htmlmin');
  var jshint    = require('./config/tasks/jshint');
  var imagemin  = require('./config/tasks/imagemin');
  var usemin    = require('./config/tasks/usemin');
  var watch     = require('./config/tasks/watch');
  var connect   = require('./config/tasks/connect');
  var wiredep   = require('./config/tasks/wiredep');
  var webfont   = require('./config/tasks/webfont');
  var karma     = require('./config/tasks/karma');
  var filehash  = require('./config/tasks/filehash');
  var ngAnnotate = require('./config/tasks/ng_annotate');
  var removelogging = require('./config/tasks/removelogging');
  var uglify = require('./config/tasks/uglify');
  var merge = require('./config/tasks/merge-copy');
  var replace = require('./config/tasks/replace');
  var ENVIRONMENT = grunt.option('environment') || 'development';

  /*----------------
    APP CONFIG
  ---------------*/
  var APP = {
    pkg: grunt.file.readJSON("package.json"),
    config: paths,
    clean: clean(paths),
    copy: copy(paths),
    compass: compass(paths, grunt, ENVIRONMENT),
    htmlmin: htmlmin(paths),
    jshint: jshint(paths),
    imagemin: imagemin(paths),
    useminPrepare: usemin(paths).useminPrepare,
    usemin: usemin(paths).usemin,
    ngAnnotate: ngAnnotate(paths),
    watch: watch(paths),
    connect: connect(paths),
    wiredep: wiredep(paths),
    webfont: webfont(paths),
    removelogging: removelogging(paths),
    karma: karma(paths),
    filehash: filehash(paths),
    uglify: uglify()
    // 'merge-copy': merge(paths, WHITELABEL),
    // replace: replace(grunt, WHITELABEL)
  };

  /*----------------
    INIT CONFIG
  -------------- -*/
  grunt.initConfig(APP);

  grunt.registerTask('build', [
    'clean',
    'wiredep',
    'useminPrepare',
    'compass',
    'copy:default',
    'copy:css_components',
    'copy:css_commons',
    'copy:css_static',
    'concat',
    'ngAnnotate',
    'removelogging',
    'uglify',
    'cssmin',
    'htmlmin:dist',
    'copy:copy_js',
    'clean:public_js',
    'filehash',
    'usemin',
    'imagemin:dist'
  ]);

  grunt.registerTask('serve', [
    'connect:livereload',
    'watch'
  ]);

  // Task for watching the public folder
  grunt.registerTask('test', [
    'karma'
  ]);

  // Task for watching the public folder
  grunt.registerTask('stage', [
    'build',
    'connect:dist',
    'watch'
  ]);

  // Task for watching the public folder
  grunt.registerTask('font', [
    'webfont'
  ]);

};
