//main controller that gets the tasks model
'use strict';
qTwo.controller('mainCtlr', function($scope, $http, tasksJson){
  
  $scope.data = {user: "blee"};
  $http.get(tasksJson)
    .success(function(data){
      $scope.data.tasks = data;
      console.log('bql-http ok');
    })
    .error(function(error){
      $scope.data.error = error;
      console.log('bql-http error');
    });
  });

