// ==UserScript==
// @name        Change Titles Of WeChat Subscription Articles
// @description
// @namespace   Violentmonkey Scripts
// @match       https://mp.weixin.qq.com/s*
// @grant       none
// ==/UserScript==

document.title = document.querySelector('#activity-name').innerHTML;