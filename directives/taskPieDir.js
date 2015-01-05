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
  $scope.tally = 0;

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

  $scope.$on('tally', function(event){
    if($scope.currentTask != null){
      console.log('bql. tally test ' + event);
      $scope.tally++;
      console.log('bql. tally test: ' + $scope.currentTask + ' / ' + $scope.tally);
    }
  });
}]);

