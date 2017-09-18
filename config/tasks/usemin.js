/*
  // Reads HTML for usemin blocks to enable smart builds that automatically
  // concat, minify and revision files. Creates configurations in memory so
  // additional tasks can operate on them

*/

module.exports = (config) => {
  "use strict";
  return {
    useminPrepare: {
      html: '<%= config.dev %>/index.html',
      options: {
        dest: '<%= config.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['concat', 'cssmin']
            },
            post: {}
          }
        }
      }
    },

    // usemin
    usemin: {
      options: {
        config: ['<%= config.dist %>']
      },
      html: ['<%= config.dist %>/{,*/}*.html']
    }
  };
};
