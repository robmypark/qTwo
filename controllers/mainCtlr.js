'use strict';
qTwo.controller('mainCtlr', function($scope, $http){
  
  $scope.data = {user: "blee"};
  $http.get("json/tasks.json")
    .success(function(data){
      $scope.data.tasks = data;
      console.log('bql-http ok');
    })
    .error(function(error){
      $scope.data.error = error;
      console.log('bql-http error');
    });
  });

