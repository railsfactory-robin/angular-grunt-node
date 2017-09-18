/**
* @name
* @desc
* @example
*    <structure-header></structure-header>
* @memberOf
*/
(function() {
  'use strict';
  angular
    .module("common")
    .component('header', {
      templateUrl: './app/common/header/header.html',
      controller: 'HeaderController'
    });
})();
