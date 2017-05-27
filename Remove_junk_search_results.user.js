// ==UserScript==
// @name        Remove junk search results
// @namespace   Yandong Liu
// @include     https://www.google.com/search*
// @version     1
// @grant       none
// ==/UserScript==

var junkList = ['somjj.com', 'sunwenqi.cn', 'bbs.kafan.cn/topic'];
var pageDomain = document.domain;
if(pageDomain == "www.google.com") {
    var resultsList = document.querySelectorAll('cite');
    fox (x in resultsList) {
        for (y in junkList) {
            if (resultsList[x].textContent.indexOf(junkList[y])) {
                let thisResult = resultsList[x].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                thisResult.parentNode.removeChild(thisResult);
            }
        }
    }
}