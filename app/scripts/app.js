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
    'ngTouch',
    'ngDraggable',
    'angular-gestures',
    'ui.router',
    'ui.router.stateHelper'

  ]);

app.config(function ($stateProvider, $routeProvider) {

  $stateProvider
    .state('static', {
      abstract: true,
      url: '/',
      templateUrl: "views/home.html",
      controller: "MainCtrl"
    })
    .state('home', {
      url: '',
      templateUrl: "views/home.html",
      controller: "MainCtrl"
    });
});