/**
 * @ngdoc directive
 * @name components
 * @module auth
 *
 * @description
 **/

(function() {
  'use strict';
  angular
    .module('components.auth')
    .component('login', {
      templateUrl: './app/components/auth/login/login.html',
      controller: 'LoginController'
    })
    .config(configApp);

    configApp.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configApp ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('auth.login', {
          url: '/login',
          component: 'login'
        });
      $urlRouterProvider.otherwise('/login');
    };
  })();
