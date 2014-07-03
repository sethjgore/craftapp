'use strict';

/**
 * @ngdoc function
 * @name craftappApp.controller:AboutCtrl
 * @description
 * # WordCtrl
 * Controller of the craftappApp
 */
angular.module('craftappApp')
    .controller('WordCtrl', function($scope) {
            $scope.sentence = [{
                    'word': 'First',
                    'shape': 'verb',
                    'text': 'ran'
                }, {
                    'word': 'Second',
                    'shape': 'noun',
                    'text': 'dog'
                }, {
                    'word': 'Second',
                    'shape': 'article',
                    'text': 'The'
                  }
                ];
            });
