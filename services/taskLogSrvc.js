'use strict';
taskPieMdle.
factory('taskLog', function(currentDate){
  this.task;
  this.startTime;
  this.endTime;
  this.duration;

  return {
    start: function(task){
      this.task = task;
      this.startTime = currentDate.getHours() + ":" +  currentDate.getMinutes() + ":" + currentDate.getSeconds() + "@"
         + currentDate.getMonth() + "/" + currentDate.getDate();
      this.duration = currentDate.getMinutes() + currentDate.getSeconds()/60 + currentDate.getHours()*60;
    },
    
    //bql- potential bug: user starts task, finishes task and forgets to turn it off. May need cap off point: user-set or program-set
    stop: function(task){
      this.endTime = currentDate.getHours() + ":" +  currentDate.getMinutes() + ":" + currentDate.getSeconds() + "@"
        + currentDate.getMonth() + "/" + currentDate.getDate();
      
      this.duration -= currentDate.getMinutes() + currentDate.getSeconds()/60 + currentDate.getHours()*60;
      
      //save entire log. Submit this to web service later.
      var newLog = {
        "name": this.name,
        "startTime": this.startTime,
        "endTime": this.endTime,
        "duration": this.duration
      }
      localStorage.setItem(task.name + " / " + newLog.startTime + " ~ " + newLog.endTime, newLog.duration);
      console.log('bql- localStorage added: ' + JSON.stringify(newLog));
      this.task,this.startTime,this.endTime = null;
    },

    getTask: function(){
      if(this.task == undefined || this.task == null) throw "bql- this.task undefined or null";
      return this.task;
    }
  }
});
