//main module
'use strict';
var qTwo = angular.module('qTwo',
  [
    'ngRoute',
    'ngResource',
    'taskPieMdle'
  ]).
value('tasksJson','json/tasks.json').
config(function($logProvider){
  $logProvider.debugEnabled(true);
}).
config(function($routeProvider){
  $routeProvider.when('/addTask',{
    templateUrl: 'views/addTask.html',
    controller: 'taskPieCtlr'
  });

  $routeProvider.when('/taskForm',{
    templateUrl: 'views/taskForm.html',
    controller: 'taskPieCtlr'
  });
  
  $routeProvider.when('/tasks',{
    templateUrl: 'views/taskPie.html',
    controller: 'taskPieCtlr'
  });

  $routeProvider.otherwise({
    templateUrl: 'views/taskPie.html'
  });
});
