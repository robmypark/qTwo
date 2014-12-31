'use strict';
taskPieMdle.
directive('taskPie', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/taskPie.html'
  };
}).
controller('taskPieCtlr', ['$scope', 'taskLog', function($scope, taskLog) {
  $scope.currentTask = null;

  $scope.getTaskClass = function(task){
    if(task.name == $scope.currentTask){
      return "btn btn-success";
    } else {
      return "btn btn-default";
    }
  }

  $scope.taskClick = function(task){
    if($scope.currentTask == task){
      taskLog.stop(task);
      $scope.currentTask = null;
    } else {
      if($scope.currentTask != null){
        taskLog.stop(task);
      }
      taskLog.start(task);
      $scope.currentTask = taskLog.getTask();
    }
  }
}]);

