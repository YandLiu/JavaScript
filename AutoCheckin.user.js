// ==UserScript==
// @name        AutoCheckin
// @author      Y L
// @namespace   https://github.com/YandLiu/Userscripts/
// @include     https://www.repaik.com/plugin.php?id=dsu_paulsign:sign
// @include     http://*ezhanzy.com/*
// @include     http://www.oneplusbbs.com/dsu_paulsign-sign.html
// @include     http://bbs.gter.net*
// @run-at      document-end
// @version     1.1
// @grant       none
// ==/UserScript==

var ym = document.location.hostname;
window.setTimeout( function () {
    if (ym == "www.repaik.com" || ym == "ezhanzy.com" || ym == "www.oneplusbbs.com") {
        document.querySelector("#todaysay").value = "嘻嘻哈哈";
        document.querySelector("#kx").click();
        showWindow('qwindow', 'qiandao', 'post', '0');
    }
    else if (ym == "bbs.gter.net") {
        try {
            showWindow('dsu_paulsign', 'plugin.php?id=dsu_paulsign:sign&show=sign&0f60c218');
            document.querySelector('#eb321').click();
            showWindow('qwindow', 'qiandao', 'post', '0');
        }
        catch (err) {
            hideWindow('dsu_paulsign');
        }
    }
}, 2000);
