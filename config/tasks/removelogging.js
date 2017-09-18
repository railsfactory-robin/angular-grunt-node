module.exports = (config) => {
  "use strict";
  return {
    dist: {
      src: ".tmp/concat/assets/js/app.min.js" // Each file will be overwritten with the output!
    }
  };
};
