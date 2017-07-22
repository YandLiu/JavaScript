// ==UserScript==
// @name        Zhidao Auto Expand
// @namespace   https://github.com/YandLiu/Userscripts/
// @match       https://zhidao.baidu.com/*
// @grant       none
// ==/UserScript==
var expandList = document.querySelectorAll('a.expend');
for(var i of expandList) {
    i.click();
}
