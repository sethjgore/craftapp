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
    'ngDragDrop',
    'angular-gestures',
    'ui.router',

  ]);

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('','/');

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
    .state('wiki', {
      url: '/wiki',
      templateUrl: "views/labs/wiki.html",
      controller: "WhiteboardCtrl"
    })
    .state('school', {
      url: '/school',
      templateUrl: "views/school.html",
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
        'labs': {
          templateUrl:
            function ($stateParams){
              return '/views/labs/' + $stateParams.experiment + '.html';
            },
          controllerProvider:
            function ($stateParams){


              var ctrlName = $stateParams.experiment + 'Ctrl';

              return  ctrlName.charAt(0).toUpperCase() + ctrlName.slice(1);
            }
        }
      }
    });
});