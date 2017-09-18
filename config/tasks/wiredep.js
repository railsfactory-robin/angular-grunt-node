module.exports = (config) => {
  "use strict";
  return {
    task: {
      src: [
        '<%= config.dev %>/index.html',   // .html support...
        '<%= config.dev %>/<%= config.scss %>/app.scss'  // .scss & .sass support...
      ],
   }
  };
};
