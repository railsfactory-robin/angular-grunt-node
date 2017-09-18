module.exports = (config) => {
  "use strict";
  return {
    icons: {
      src: '<%= config.dev %>/assets/build-font/*.svg',
      dest: '<%= config.dev %>/assets/fonts',
      destCss: '<%= config.dev %>/<%= config.scss %>/elements',
      htmlDemo: false,
      options: {
        templateOptions: {
          baseClass: 'fe-icon',
          classPrefix: 'fe-',
          mixinPrefix: 'fe-'
        },
        stylesheet: 'scss',
        types: 'eot,woff,ttf,svg',
        font: 'edusynch-icon',
        relativeFontPath: '../fonts',
        hashes: false
      }
    }
  };
};
