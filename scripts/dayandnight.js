// CS 22A Assignment 5
// David Gudeman

'use strict'
var myEmoticon = document.getElementById("emoticon");
var myTime = document.getElementById("time");
var myPeriod = document.getElementById("period");

var hour = 8;
var emoCounter = 1;
var periodCounter = 9;

var intervalHandle = setInterval(changeEmoticon, 1000);
var intervalHandleTime = setInterval(increment, 1000);
var intervalHandlePeriod = setInterval(periodUpdate, 1000);

// function to update the AM/PM element every 12 sec
function periodUpdate(){
   if (periodCounter < 12){
      myPeriod.textContent = "AM";
      ++periodCounter;
   } else if(periodCounter < 23){
      myPeriod.textContent = "PM";
      ++periodCounter;
   } else {
      periodCounter = 0;
   }
}
// cycles through hours and updates "time" Element
function increment() { 
  if (hour <12){
      hour = ++hour;
      myTime.textContent = hour;
   } else {
      hour = 0;
      increment();
   }
}
// toggles the emoticon every 12 hours and updates "alt" Element
function changeEmoticon(){
    if (emoCounter < 12) { 
      myEmoticon.setAttribute("src", "awake.gif");
      myEmoticon.setAttribute("alt", "awake");
      emoCounter++;
    }else if (emoCounter < 23) {
      //emoticonIndex = 1;
      myEmoticon.setAttribute("src", "sleep.gif");
      myEmoticon.setAttribute("alt", "sleep");
      emoCounter++;
    }else{
      emoCounter = 0;       
    }
}
// method to stop the program running by clicking on emoticon
myEmoticon.onclick = function(){
    clearInterval(intervalHandle);
    clearInterval(intervalHandleTime);
    clearInterval(intervalHandlePeriod);
}
