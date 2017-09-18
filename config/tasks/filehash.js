module.exports = (config) => {
  "use strict";

  return {
    options: {
      merge: true,
      keep: false,
      etag: "{{= +mtime}}",
      hashlen: "6"
    },
    css: {
      cwd: '<%= config.dist %>/assets',
      src: 'css/*.css',
      dest: '<%= config.dist %>/assets'
    },
    js: {
      cwd: '<%= config.dist %>/assets',
      src: 'js/*.js',
      dest: '<%= config.dist %>/assets'
    }
  };
};
