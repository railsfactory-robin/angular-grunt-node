/**
  * @ngdoc controller
  * @name component.app.controller
  * @desc Methods for controller
  **/
(function() {
  'use strict';

  angular
    .module('components.dashboard')
    .controller('DashboardController', DashboardController)
    .run(function() {
      console.log('DashboardController started');
    });

  /* @ngInject */
  function DashboardController ($rootScope) {
    var $ctrl = this;
  }
})();
