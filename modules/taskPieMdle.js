//component module - taskPie
angular.module("taskPieMdle",[])
.directive("taskPie", function(){
  return {
    restrict: "E",
    templateUrl: "views/taskPie.html",
    controller: function($scope){
      console.log("bql. taskPie directive controller");
      
      //when task gets clicked
      $scope.taskClick = function(task){

        console.log("bql. taskClick start");
        
        var date = new Date();
        var time = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " @ " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        //save entry
      }
    }
  }
});
