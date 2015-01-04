//directive for adding a task. Initially a link that takes you to the task details form
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
    var jsonObj = angular.toJson(newTask);
    console.log(jsonObj);
    //bql-you'll need a webservice/db to save this.
  }

});
