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
    $scope.articles = [
      'the',
      'an',
      'a',
      'some',
      'these',
      'this',
      'that',
      'those',
      'one'
    ];
    $scope.adjectives = [
      'azure',
      'stocky',
      'green',
      'warped',
      'peeling',
      'shining',
      'European',
      'zippy',
      'concrete'
    ];
    $scope.nouns = [
      'cat',
      'ship',
      'bridge',
      'car',
      'compost',
      'table',
      'folio',
      'veranda',
      'quilt'
    ];
  });
