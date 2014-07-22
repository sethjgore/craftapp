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
        templateUrl: 'views/landing.html',
        controller: 'MainCtrl'
      })
      .when('/fancy', {
        templateUrl: 'views/landing--fancy.html',
        controller: 'MainCtrl'
      })
      .when('/fyi', {
        templateUrl: 'views/fyi.html',
        controller: 'MainCtrl'
      })
      .when('/landing2', {
        templateUrl: 'views/landing2.html',
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
