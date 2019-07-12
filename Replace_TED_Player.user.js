// ==UserScript==
// @name        Replace TED Player
// @namespace   https://github.com/YandLiu/Userscripts
// @description Replace the TED player which always plays low-resolution videos with the default HTML5 video player plays high-quality videos
// @match       https://www.ted.com/talks/*
// @run-at      document-end
// @grant       none
// ==/UserScript==

var talkHTML = document.querySelectorAll('script')[13].innerHTML;
var talkInformation = talkHTML.slice(19, talkHTML.length - 1);
var obj = JSON.parse(talkInformation);
var talkData = obj.__INITIAL_DATA__;
// var talkID = talkData.comments.talk_id;
var talkID = talkData.current_talk;
var poster = talkData.talks[0].hero;

var native = talkData.talks[0].downloads.nativeDownloads;
var native_low = native.low;
var native_medium = native.medium;
var native_high = native.high;

var zh_cn = talkData.talks[0].downloads.subtitledDownloads['zh-cn'];
var zh_cn_low = zh_cn.low;
var zh_cn_medium = zh_cn.medium;
var zh_cn_high = zh_cn.high;

var zh_tw = talkData.talks[0].downloads.subtitledDownloads['zh-tw'];
var zh_tw_low = zh_tw.low;
var zh_tw_medium = zh_tw.medium;
var zh_tw_high = zh_tw.high;

var audio = talkData.talks[0].downloads.audioDownload;

/*
 * 使用MutationObserver对象封装一个监听DOM生成的函数
 * https://wangdoc.com/javascript/dom/mutationobserver.html
 */
(function(win) {
    'use strict';

    var listeners = [];
    var doc = win.document;
    var MutationObserver = win.MutationObserver || win.WebKitMutationObserver;
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
            var elements = doc.querySelectorAll(listener.selector);
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
    win.ready = ready;

})(unsafeWindow);

unsafeWindow.ready('#ted-player', function(element) {
    var player = document.querySelector('#ted-player');
    player.outerHTML = '<video id="#tedVideo" src="' + native_high + '" controls width="100%" height="100%" poster="' + poster + '"></video>';
})
