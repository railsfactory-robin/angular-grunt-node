module.exports = (config, grunt, ENVIRONMENT) => {
  "use strict";
  var right_folder = ENVIRONMENT === 'development'  ? '../../images' : '../images';

  return {
    options: {
      generatedImagesDir: '.tmp/images/generated',
      javascriptsDir: '<%= config.dev %>/<%= config.js %>',
      imagesDir: '<%= config.dev %>/<%= config.img %>',
      fontsDir: '<%= config.dev %>/<%= config.fonts %>',
      importPath: './bower_components',
      httpGeneratedImagesPath: '/images/generated',
      relativeAssets: false,
      assetCacheBuster: false,
      raw: 'Sass::Script::Number.precision = 10\n'
    },
    dev: {
      options: {
        sassDir: '<%= config.dev %>/<%= config.scss %>',
        cssDir: '<%= config.dev %>/<%= config.css %>',
        httpFontsPath: '../fonts'
      }
    },
    components: {
      options: {
        sassDir: '<%= config.dev %>/app/components',
        cssPath: '.tmp/css/components',
        httpImagesPath: right_folder,
      }
    },
    common: {
      options: {
        sassDir: '<%= config.dev %>/app/common',
        cssPath: '.tmp/css/common',
        httpImagesPath: right_folder,
      }
    },
    static: {
      options: {
        sassDir: '<%= config.dev %>/app/static',
        cssPath: '.tmp/css/static',
        httpImagesPath: right_folder,
      }
    },
    server: {
      options: {
        sourcemap: true
      }
    }
  };
};
