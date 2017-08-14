// ==UserScript==
// @name        Zhidao Auto Expand
// @author      Y L
// @namespace   https://github.com/YandLiu/Userscripts/
// @match       https://zhidao.baidu.com/*
// @version     1.4
// @grant       none
// ==/UserScript==
try {
    document.querySelector('#show-answer-hide').click();
} catch (e) {}
try {
    var expandList = document.querySelectorAll('a.expend');
    for (var i of expandList) i.click();
} catch (e) {}
try {
    document.querySelector('.show-hide-dispute').click();
} catch (e) {}
