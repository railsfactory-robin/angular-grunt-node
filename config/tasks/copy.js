module.exports = (config) => {
  "use strict";

  return {
    default: {
      files: [
        {
          expand: true,
          dot: true,
          cwd: '<%= config.dev %>/',
          dest: '<%= config.dist %>/',
          src: [
            'i18n/**/*',
            'audios/**/*',
            'assets/fonts/**/*',
            'outdatedbrowser/**/*',
            'assets/**/**/*.svg',
            'assets/libs/*'
          ],
        }
      ]
    },
    svg: {
      expand: true,
      files: [
        {
          expand: true,
          cwd: '<%= config.dev %>/assets/',
          dest: '<%= config.dist %>/assets/',
          src: [
            '**/**/*.svg',
            'libs/*'
          ]
        }
      ]
    },
    css_components: {
      files: [
        {
          expand: true,
          dot: true,
          cwd: '.tmp/css/components',
          dest: '<%= config.dev %>/<%= config.css %>/components/',
          src: [
            '**/**/*.css',
          ],
          flatten: true
        }
      ]
    },
    css_commons: {
      files: [
        {
          expand: true,
          dot: true,
          cwd: '.tmp/css/common',
          dest: '<%= config.dev %>/<%= config.css %>/common/',
          src: [
            '**/**/*.css',
          ],
          flatten: true
        }
      ]
    },
    css_static: {
      files: [
        {
          expand: true,
          dot: true,
          cwd: '.tmp/css/static',
          dest: '<%= config.dev %>/<%= config.css %>/static/',
          src: [
            '**/**/*.css',
          ],
          flatten: true
        }
      ]
    },
    copy_js: {
      files: [
        {
          expand: true,
          dot: true,
          cwd: '<%= config.dist %>/app/',
          dest: '<%= config.dist %>/assets/js/',
          src: [
            '**/*.js',
          ],
          flatten: true
        }
      ]
    }
  };
};
