// ==UserScript==
// @name        Quora Tools
// @author      Yandong
// @namespace   https://github.com/YandLiu/Userscripts/
// @match       https://www.quora.com/*
// @grant       none
// @version     1.0
// ==/UserScript==

document.addEventListener("DOMNodeInserted", () => {
    let ads = document.querySelectorAll(".q-text.qu-color--gray_light.qu-fontSize--small.qu-passColorToLinks");
    ads.forEach((i) => {
        if (i.innerText.search(/(Ad|Sponsored) by/) != -1) {
            i.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(i.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
        }
    });
});
