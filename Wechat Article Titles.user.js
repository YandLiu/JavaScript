// ==UserScript==
// @name		Wechat Article Titles
// @namespace	https://github.com/YandLiu/userscripts
// @match		https://mp.weixin.qq.com/*
// @grant		none
// ==/UserScript==
document.title = document.querySelector('#activity-name').innerText;