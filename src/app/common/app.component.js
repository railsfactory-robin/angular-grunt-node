/**
 * @ngdoc directive
 * @name app
 * @module common
 *
 * @description
 **/

 (function() {
  'use strict';

  angular
  .module('common')
  .component('app', {
    templateUrl: './app/common/app.html',
    controller: 'AppController'
  })
  .config(_configApp);

  _configApp.$inject = ['$stateProvider'];
  function _configApp ($stateProvider) {

    $stateProvider
      .state('app', {
        component: 'app'
      });
  }
})();
