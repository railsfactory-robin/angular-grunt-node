/**
 * @ngdoc directive
 * @name app
 * @module components
 *
 * @description
 **/

(function() {
  'use strict';

  angular
    .module('components.dashboard')
    .component('dashboard', {
      templateUrl: './app/components/dashboard/dashboard.html',
      controller: 'DashboardController'
    })
    .config(_configApp);
    _configApp.$inject = ['$stateProvider'];

    function _configApp ($stateProvider) {
      $stateProvider
        .state('dashboard', {
          parent: 'app',
          url: '/dashboard',
          component: 'dashboard'
        });
    }
})();
