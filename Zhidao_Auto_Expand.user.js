// ==UserScript==
// @name        Zhidao Auto Expand
// @author      Y L
// @namespace   https://github.com/YandLiu/Userscripts/
// @match       https://zhidao.baidu.com/*
// @version     1.2
// @grant       none
// ==/UserScript==
document.querySelector('#show-answer-hide').click();
try {
    document.querySelector('.show-answer-dispute').click();
}
catch (e) {}
try {
    var expandList = document.querySelectorAll('a.expend');
    for(var i of expandList) i.click();
}
catch (e) {}
