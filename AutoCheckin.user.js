// ==UserScript==
// @name        AutoCheckin
// @namespace   namespace
// @include     https://www.repaik.com/plugin.php?id=dsu_paulsign:sign
// @include     http://ezhanzy.com/thread-3083-1-1.html
// @include     http://www.oneplusbbs.com/dsu_paulsign-sign.html
// @run-at      document-end
// @version     1
// @grant       none
// ==/UserScript==

var ym = document.location.hostname;
window.setTimeout( function () {
    if (ym == "www.repaik.com" || ym == "ezhanzy.com" || ym == "www.oneplusbbs.com") {
        document.querySelector("#todaysay").value = "嘻嘻哈哈";
        document.querySelector("#kx").click();
        showWindow('qwindow', 'qiandao', 'post', '0');
    }
}, 2000);