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

  ]);

app.config(function ($stateProvider, $routeProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "views/home.html",
      controller: "MainCtrl"
    })
    .state('fyi', {
      url: '/fyi',
      templateUrl: "views/fyi.html",
      controller: "MainCtrl"
    })
    .state('draft', {
      url: '/draft',
      templateUrl: "views/labs/draft.html",
      controller: "DraftCtrl"
    })
    .state('app', {
      url: '/whiteboard',
      templateUrl: "views/whiteboard.html",
      controller: "WhiteboardCtrl"
    })
    .state('wiki', {
      url: '/wiki',
      templateUrl: "views/labs/wiki.html",
      controller: "WhiteboardCtrl"
    })
    .state('labs', {
      url: '/labs',
      templateUrl: "views/labs/index.html",
      controller: "DraftCtrl"
    })
    .state('labs.experiment', {
      url: '/{experiment}',
      views: {
        'main': {
          templateUrl:
            function (stateParams){
              return '/views/labs/' + stateParams.experiment + '.html';
            },
          controller: "DraftCtrl"
        }
      }

    });
});