'use strict';
 const tw_class = document.getElementsByClassName("tw-button tw-button--success");
 var item = false;

 const tw_function = function(){
   try {
     tw_class[0].click();
     console.log("clicked!");
     item = true;
   } catch (e) {}
 }

 chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
   sendResponse(item);
   item = false;
 });

 setInterval(tw_function, 1000);
