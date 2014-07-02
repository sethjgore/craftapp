'use strict';

/**
 * @ngdoc function
 * @name craftappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the craftappApp
 */
angular.module('craftappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
