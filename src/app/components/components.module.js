/**
 *
 * @ngdoc module
 * @name components
 *
 * @requires components.dashboard
 * off components.user
 * @requires components.auth
 *
 * @description
 *
 * This is the components module. It includes all of our components.
 *
 **/

(function() {
 'use strict';
  angular
    .module('components', [
      'components.dashboard',
      'components.auth'
    ]);
})();
