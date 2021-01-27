// ==UserScript==
// @name        雪球港股助手
// @namespace   Violentmonkey Scripts
// @match       https://xueqiu.com/*
// @grant       none
// @version     1.1
// @author      -
// @description 自动刷新实时行情
// ==/UserScript==

try {
    var stockName = document.querySelector(".stock-name").innerText;
    if (stockName.search(/HK:/) != -1) {
        var auto = document.createElement("div");
        auto.innerHTML = "Auto";
        auto.classList.add("stock-issue");
        auto.style.backgroundColor = "pink";
        auto.style.color = "black";
        auto.onclick = () => {
            automate = setInterval(() => {
                var button = document.querySelector(".stock-refresh");
                button.click();
            }, 2500);
        };
        var stop = document.createElement("div");
        stop.innerHTML = "Stop";
        stop.classList.add("stock-issue");
        stop.style.backgroundColor = "pink";
        stop.style.color = "black";
        stop.onclick = () => {
            clearInterval(automate);
        };
        document.querySelector(".stock-issues").appendChild(auto);
        document.querySelector(".stock-issues").appendChild(stop);
    }
    document.onload = auto.click();
}
catch (e) { }