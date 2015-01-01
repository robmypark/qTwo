'use strict';
taskPieMdle.
factory('taskLog', function(currentDate){
  this.task;
  this.startTime;
  this.endTime;

  return {
    start: function(task){
      this.task = task;
      this.startTime = currentDate.getHours() + ":" +  currentDate.getMinutes() + ":" + currentDate.getSeconds() + "@"
         + currentDate.getMonth() + "/" + currentDate.getDate();
    },
    
    //bql- potential bug: user starts task, finishes task and forgets to turn it off. May need cap off point: user-set or program-set
    stop: function(task){
      this.endTime = currentDate.getHours() + ":" +  currentDate.getMinutes() + ":" + currentDate.getSeconds() + "@"
        + currentDate.getMonth() + "/" + currentDate.getDate();
      
      //save entire log
      var newLog = {
        "task": this.task,
        "startTime": this.startTime,
        "endTime": this.endTime
      }
      var lsCount = localStorage.length + 1;
      localStorage.setItem(lsCount, newLog);
      this.task,this.startTime,this.endTime = null;
      console.log('bql. localStorage count' + lsCount);
    },

    getTask: function(){
      if(this.task == undefined || this.task == null) throw "bql- this.task undefined or null";
      return this.task;
    }
  }
});
