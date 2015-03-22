'use strict';

angular.module('HoardIt', [
  'ui.router',
  'ui.bootstrap'
])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('hoards', {
        url: '/',
        templateUrl: 'app/hoards/hoards.html',
        controller: 'HoardsCtrl as hoards'
      });

    $locationProvider.html5Mode(true);
    // $httpProvider.interceptors.push('authInterceptor');
  })