'use strict';

/**
 * @ngdoc overview
 * @name craftappApp
 * @description
 * # craftappApp
 *
 * Main module of the application.
 */
angular
  .module('craftappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/word', {
        templateUrl: 'views/word.html',
        controller: 'WordCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
