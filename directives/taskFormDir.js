'use strict';
taskPieMdle.
directive('taskForm', function(){
  return{
    restrict: 'E',
    templateUrl: 'views/addTask.html'
  };
}).
controller('taskFormCtlr', function(){
  $scope.processNewTask = function (newTask){
    
  }

});
