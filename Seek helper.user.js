// ==UserScript==
// @name        Seek helper
// @namespace   Violentmonkey Scripts
// @match       https://www.seek.com.au/*
// @grant       none
// @version     1.0
// @author      YandLiu
// @description 2/11/2021, 11:04:50 PM
// ==/UserScript==

// var titleList = document.querySelectorAll("a[data-automation='jobTitle']");
// for (i of titleList) {
//     i.href = i.href.split("?")[0];
// }

(function (root) {
    'use strict';

    var listeners = [];
    var doc = window.document;
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var observer;

    function ready(selector, fn) {
        // 储存选择器和回调函数
        listeners.push({
            selector: selector,
            fn: fn
        });
        if (!observer) {
            // 监听document变化
            observer = new MutationObserver(check);
            observer.observe(doc.documentElement, {
                childList: true,
                subtree: true
            });
        }
        // 检查该元素是否已经在DOM中
        check();
    }

    function check() {
        // 检查DOM元素是否匹配已储存的元素
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            // 检查指定元素是否有匹配
            var elements = document.querySelectorAll(listener.selector);
            for (var j = 0; j < elements.length; j++) {
                var element = elements[j];
                // 确保回调函数只会对该元素调用一次
                if (!element.ready) {
                    element.ready = true;
                    // 对该元素调用回调函数
                    listener.fn.call(element, element);
                }
            }
        }
    }

    // 对外暴露ready
    root.ready = ready;

})(window);

function clear(element) {
    if (!(element.href.match(/job\/\d+/))) return false;
    // if (element.innerText.match(/postdoc/i)) element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode.parentNode.parentNode);
    return (element.href = element.href.split("?")[0]);
}
(function () {
    'use strict';
    ready('a[data-automation="jobTitle"]', clear);
})();
