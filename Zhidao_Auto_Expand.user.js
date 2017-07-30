// ==UserScript==
// @name        Zhidao Auto Expand
// @author      Y L
// @namespace   https://github.com/YandLiu/Userscripts/
// @match       https://zhidao.baidu.com/*
// @version     1.1
// @grant       none
// ==/UserScript==
document.querySelector('#show-answer-hide').click();
var expandList = document.querySelectorAll('a.expend');
for(var i of expandList) i.click();
