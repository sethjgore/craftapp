'use strict';

/**
 * @ngdoc overview
 * @name grmmr
 * @description
 * # craftappApp
 *
 * Main module of the application.
 */
var app = angular.module('grmmr', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
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
