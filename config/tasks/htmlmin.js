module.exports = (config) => {
  "use strict";
  return {
    dist: {
      options: {
        removeComments: false,
        collapseWhitespace: false
      },
      files: [
        {
          expand: true,
          cwd: '<%= config.dev %>/',
          src: '**/**/*.html',
          dest: '<%= config.dist %>/',
        }
      ],
    }
  };
};
