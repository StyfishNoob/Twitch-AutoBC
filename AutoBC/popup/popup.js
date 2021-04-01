 'use strict';
 var m = document.getElementById("m");
 var s = document.getElementById("s");
 var twitter = document.getElementById("TwitterIcon");
 var minute = document.getElementById("min");
 var seconds = document.getElementById("sec");
 var min = 0;
 var sec = 0;

 window.onload = function(){
   chrome.storage.local.get(["key_lang"], function(result){
     if(result.key_lang){
       lang_menu.value = result.key_lang;
     }

     lang_function();
   })
 }

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

 var twitter_function = function(){
   window.open("https://twitter.com/Styfish_Noob");
 }

 var lang_function = function(){
   chrome.storage.local.set({key_lang: lang_menu.value});

   if(lang_menu.value == "en"){
     des1.innerHTML = "Time remaining:";
     des2.innerHTML = "*The measurement will start after the first box appears.";
     minute.innerHTML = "m";
     seconds.innerHTML = "s";
   }

   if(lang_menu.value == "ja"){
     des1.innerHTML = "箱が出現まで残り約:";
     des2.innerHTML = "※一度箱が出現してから計測が始まります";
     minute.innerHTML = "分";
     seconds.innerHTML = "秒";
   }
 }

 var clear = function(){
   chrome.storage.local.clear();
 }

 twitter.addEventListener("click", twitter_function);
 lang_menu.addEventListener("change", lang_function);
