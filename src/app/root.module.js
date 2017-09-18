/**
  * @ngdoc module
  * @name root
  **/
(function() {
  'use strict';

  angular
    .module('root', [
      'common',
      'components'
    ])
    .config(_configRoot);

    _configRoot.$inject = ['$locationProvider'];
    function _configRoot ($locationProvider) {
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
    }
})();



