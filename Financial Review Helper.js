// ==UserScript==
// @name        Financial Review Helper
// @namespace   https://github.com/YandLiu/Userscripts/
// @match       https://www.afr.com/*
// @grant       none
// @version     1.0
// @author      YandLiu
// @description 4/6/2020, 8:00:33 PM
// ==/UserScript==
var figureList = document.querySelectorAll("#content section picture source:first-child");
var imgList = document.querySelectorAll("#content section picture img");
for (i = 0; i < figureList.length; i++) {
    var string = figureList[i].getAttribute("data-srcset").split(" ")[1];
    imgList[i].setAttribute("src", string);
}
