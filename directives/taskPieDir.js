'use strict';
taskPieMdle.
directive('taskPie', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/addTask.html'
  };
}).
controller('taskPieCtlr', ['$scope', function($scope, taskLog) {
  $scope.currentTask = null;

  $scope.getTaskClass = function(task){
    if(task.name == $scope.currentTask){
      return "btn btn-success";
    } else {
      return "btn btn-default";
    }
  }

  $scope.taskClick = function(task){
    var currentTask = taskLog.getTask();
    if(currentTask == task.name){

      console.log("bql- taskPieCtlr going to stop log now");

      taskLog.stop(task);
    } else {

      console.log("bql- taskPieCtrlr gooing to start log now");

      taskLog.start(task);
    }
    $scope.currentTask = taskLog.getTask();
  }
}]);

