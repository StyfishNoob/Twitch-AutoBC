 'use strict';
 var m = document.getElementById("m");
 var s = document.getElementById("s");
 var min = 0;
 var sec = 0;

 setInterval(function(){
   chrome.runtime.sendMessage({message: "i want min"}, function(item){
     if(!item){
       m.innerHTML = "0";
     }else{
       m.innerHTML = item;
     }
   })
 },100)

 setInterval(function(){
   chrome.runtime.sendMessage({message: "i want sec"}, function(item){
     if(!item){
       s.innerHTML = "0";
     }else{
       s.innerHTML = item;
     }
   })
 },100)
