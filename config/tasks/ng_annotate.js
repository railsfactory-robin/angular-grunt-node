module.exports = (config) => {
  "use strict";
  return {
    dist: {
      files: [{
        expand: true,
        cwd: '.tmp/concat/assets/js',
        src: '*.js',
        dest: '.tmp/concat/assets/js'
      }]
    }
  };
};
