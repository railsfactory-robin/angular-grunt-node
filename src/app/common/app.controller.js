/**
  * @ngdoc controller
  * @name component.app.controller
  * @desc Methods for controller
  **/
(function() {
  'use strict';

  angular
    .module('common')
    .controller('AppController', AppController)
    .run(function() {
      console.log('AppController started');
    });

  /* @ngInject */
  function AppController () {
    var $ctrl = this;

  }
})();
