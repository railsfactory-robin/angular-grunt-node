module.exports = (config) => {
  "user strict";

  return {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },
    all: {
      src: [
        'Gruntfile.js',
        '<%= config.dev %>/<%= config.js %>/{,*/}*.js'
      ]
    }
  };
};
