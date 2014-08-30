'use strict';

/**
 * @ngdoc function
 * @name craftappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the craftappApp
 */
angular.module('grmmr')
  .controller('DraftCtrl', function ($scope) {
    $scope.shape = {
      currentDegree : "0",
      Word: 'Word-verb-present',
      image : "/images/Word/verb-present.png"
      };
  });
