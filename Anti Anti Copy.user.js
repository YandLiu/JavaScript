// ==UserScript==
// @name        anti-anti-copy
// @author      taoww
// @namespace   anti-anti-copy
// @description This script comes from: https://www.firefox.net.cn/read-52236
// @include     http*://www.zhihu.com/*
// @version     1
// @grant       none
// @run-at      document-end
// ==/UserScript==

document.addEventListener("copy", function(e){e.stopPropagation()}, true);
