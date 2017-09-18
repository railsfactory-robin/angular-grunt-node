module.exports = (config) => {
  "use strict";
  return {
    dist: {
      src: ["<%= config.dist %>"]
    },
    img: {
      src: ["<%= config.dev %>/<%= config.img %>"]
    },
    tmp: {
      src: [".tmp", "<%= config.dev %>/.tmp", ".sass-cache"]
    },
    css: {
      src: [ "<%= config.dev %>/<%= config.css %>"]
    },
    public_js: {
      src: ["<%= config.dist %>/app/*.js"]
    }
  };
};
