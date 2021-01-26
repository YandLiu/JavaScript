// ==UserScript==
// @name        雪球港股助手
// @namespace   Violentmonkey Scripts
// @match       https://xueqiu.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 自动刷新实时行情
// ==/UserScript==
try {
    var stockName = document.querySelector(".stock-name").innerText;
    if (stockName.search(/HK:/) != -1) {
        window.setInterval(function () {
            var button = document.querySelector(".stock-refresh");
            button.click();
        }, 5000);
    }
}
catch (e) { }
