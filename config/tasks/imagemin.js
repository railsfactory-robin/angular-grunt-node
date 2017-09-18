module.exports = (config) => {
  "use strict";

  return {
    dist: {
      files: [{
        expand: true,
        cwd:  '<%= config.dev %>/<%= config.img %>',
        src: '{,**/*}*.{png,jpg,jpeg,gif}',
        dest: '<%= config.dist %>/<%= config.img %>'
      }],
    }
  };
};
