// ==UserScript==
// @name        AutoCheckin
// @author      Y L
// @namespace   https://github.com/YandLiu/Userscripts/
// @include     https://www.repaik.com/plugin.php?id=dsu_paulsign:sign
// @include     http://*ezhanzy.com/*
// @include     http://www.oneplusbbs.com/dsu_paulsign-sign.html
// @include     http://bbs.gter.net*
// @include     http://bbs.ntrqq.net*
// @include     https://www.tailsocks.com/user/index.html
// @include     http://ss.onekeyinstall.com/user/index.php
// @run-at      document-end
// @version     1.2
// @grant       none
// ==/UserScript==

var ym = document.location.hostname;
window.setTimeout( function () {
    if (ym == "www.repaik.com" || ym == "ezhanzy.com" || ym == "www.oneplusbbs.com" || ym == 'bbs.ntrqq.net') {
        document.querySelector("#todaysay").value = "嘻嘻哈哈";
        document.querySelector("#fd").click();
        showWindow('qwindow', 'qiandao', 'post', '0');
    }
    if (ym == "bbs.gter.net") {
        try {
            showWindow('dsu_paulsign', 'plugin.php?id=dsu_paulsign:sign&show=sign&0f60c218');
            document.querySelector('#eb321').click();
            showWindow('qwindow', 'qiandao', 'post', '0');
        }
        catch (err) {
            hideWindow('dsu_paulsign');
        }
    }
    if (ym == "www.tailsocks.com" || ym == "ss.onekeyinstall.com") {
            document.querySelector('a.btn.btn-success').click();
    }
}, 2000);
