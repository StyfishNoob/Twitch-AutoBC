 'use strict';
 var settime = 900;
 var min;
 var sec;
 var i = 0;
 var tabs_id = false;

 window.onload = function(){
   i = 0;
   min = 0;
   sec = 0;
   chrome.browserAction.setBadgeText({"text": String()});
   console.log("window.onloadが読み込まれました");
 }

var inter = setInterval(function(){
  chrome.tabs.query( {'url': "https://www.twitch.tv/*"}, function(tabs){

    try {
      if(tabs[0].id){
        tabs_id = true;
      }
    } catch (e) {
      tabs_id = false;
    }

    chrome.tabs.sendMessage(tabs[0].id, {message: "back -> content"}, function(item){

      if(item === true){
        console.log(item);
        timeF();
        i += 1;
      }
      
    })
  })
}, 1000)

 var timeF = function(){
   var timeinter = setInterval(function(){

     min = Math.floor(settime % (24 * 60 * 60) % (60 * 60) / 60);
     sec = settime % (24 * 60 * 60) % (60 * 60) % 60;
     settime -= 1;
     chrome.browserAction.setBadgeText({"text": String(settime)});

     if(i >= 2){
       clearInterval(timeinter);
       i = 1;
       settime = 900;
     }

     if(settime < 0){
       clearInterval(timeinter);
       settime = 900;
       i = 0;
       chrome.browserAction.setBadgeText({"text": String()})
     }

     if(tabs_id === false){
       clearInterval(timeinter);
       i = 0;
       min = 0;
       sec = 0;
       settime = 900;
       chrome.browserAction.setBadgeText({"text": String()});
     }
   },1000);
 }

 chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
   if(request.message === "i want min"){
     sendResponse(min);
   }

   if(request.message === "i want sec"){
     sendResponse(sec);
   }
 });
