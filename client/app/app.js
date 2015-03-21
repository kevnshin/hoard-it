'use strict';

angular.module('HoardIt', [

])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    // $httpProvider.interceptors.push('authInterceptor');
  })