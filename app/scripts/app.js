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
    'dndLists'

  ]);


app.config(function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

  //DOES: enables external media
  //READ: http://toddmotto.com/creating-an-angularjs-directive-from-one-of-your-existing-plugins-scripts/
  $sceDelegateProvider.resourceUrlWhitelist(['self', '**']);

  //DOES: redirects / to /#/
  $urlRouterProvider.when('','/');

  //DOES: app's routing
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "views/home.html",
      controller: "MainCtrl"
    })
    .state('overview', {
      url: '/overview',
      templateUrl: "views/overview.html",
      controller: "MainCtrl"
    })
    .state('fyi', {
      url: '/fyi',
      templateUrl: "views/fyi.html",
      controller: "MainCtrl"
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