/**
 *
 * @ngdoc module
 * @name common
 *
 * @requires ui.router
 *
 * @description
 *
 * This is the common module. It includes a run method that setups the loading bar.
 *
 **/
(function() {
  'use strict';
  angular
    .module('common', [
      'ui.router',
      'common.header'
    ]);
})();
