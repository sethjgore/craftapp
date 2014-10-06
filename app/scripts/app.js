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
    'angular-gestures',
    'ui.router',
    'ui.sortable',
    'firebase'
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
      templateUrl: "views/school.html"
    })
    .state('labs', {
      url: '/labs',
      templateUrl: "views/labs/index.html",
      controller: "MainCtrl"
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

app.run(function(){

})
app.constant('FIREBASE_URL', 'https://fiery-fire-1420.firebaseio.com/');