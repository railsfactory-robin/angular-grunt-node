/**
 *
 * @ngdoc module
 * @name components.auth
 *
 * @requires ui.router
 *
 * @description
 *
 * This is the auth module. It includes our auth components
 *
 **/

(function() {
  'use strict';
  angular
    .module('components.auth', [
      'ui.router'
    ])
    .config(_configAuth);

    _configAuth.$inject = ['$stateProvider'];
    function _configAuth ($stateProvider) {
      $stateProvider
        .state('auth', {
          views: {
            '': {
              templateUrl: './app/components/auth/auth.html'
            },
          }
        });
    }
})();
