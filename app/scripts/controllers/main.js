'use strict';

/**
 * @ngdoc function
 * @name craftappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the craftappApp
 */
angular.module('craftappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
