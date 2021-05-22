'use strict';
 const tw_class = document.getElementsByClassName("ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 VGQNd");
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
