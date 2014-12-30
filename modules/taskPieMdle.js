//component module - taskPie
'use strict';
var taskPieMdle = angular.module('taskPieMdle',[]).
value('logSubmitUrl', 'json/taskLogs.json').
value('currentDate', new Date());
