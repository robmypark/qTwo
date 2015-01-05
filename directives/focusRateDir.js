//directive for setting the focus rate for applicable tasks
//you click it whenever you are "distracted". Sort of a tally system
//this broadcasts the tally to other subcontroller that logs the task 'focus rate', which is 10 - # of clicks
'use strict';
taskPieMdle.
directive('focusRate', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/focusRate.html'
  };
}).
controller('focusRateCtlr', function($scope, currentDate){
  $scope.tally = function(){
    $scope.$broadcast('tally',  currentDate.getHours() + ":" +  currentDate.getMinutes() + ":" + currentDate.getSeconds());
  }

});
