/// <reference types="ion.web" />

angular.module('speech-recognition', []).controller("recognition", ["$scope",function($scope){

$scope.testListen = function(){

    console.log("This is StartListen");

}

$scope.testStopListen = function(){

    console.log("This is StopListen");

}

$scope.testClear = function(){

    console.log("This is Clear");

}
    var clickStartListen = document.getElementById('StartListen');
    var clickStopListen = document.getElementById('StopListen');
    var clickClear = document.getElementById('Clear');

    clickStartListen.addEventListener("click",$scope.testListen);
    clickStopListen.addEventListener("click",$scope.testStopListen);
    clickClear.addEventListener("click",$scope.testClear); 
}])
export var templateUrl = require("./speechRecognition.tpl.html");