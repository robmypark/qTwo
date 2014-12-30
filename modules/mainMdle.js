//main module
'use strict';
var qTwo = angular.module('qTwo',
  [
    'ngRoute',
    'ngResource',
    'taskPieMdle'
  ]).
config(function($logProvider){
  $logProvider.debugEnabled(true);
}).
config(function($routeProvider){
  $routeProvider.when('/newTask',{
    templateUrl: 'views/newTask.html'
  });

  $routeProvider.otherwise({
    templateUrl: 'views/default.html'
  });
});
