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
// @include     https://www.shadowsocks5.com/user/index.html
// @include     http://ss.onekeyinstall.com/user/index.php
// @include     https://www.packtpub.com/packt/offers/free-learning*
// @include     https://www.tsdm.me/*
// @include     https://bbs.kafan.cn/*
// @include     http://bbs.itzmx.com/*
// @include     https://www.52pojie.cn/*
// @run-at      document-end
// @version     2.0
// @grant       none
// ==/UserScript==

var ym = document.location.hostname;
window.setTimeout(function() {
    if (ym == "www.repaik.com" || ym == "ezhanzy.com" || ym == "www.oneplusbbs.com" || ym == 'bbs.ntrqq.net' || ym == 'www.tsdm.me' || ym == 'bbs.itzmx.com') {
        document.querySelector("#todaysay").value = "嘻嘻哈哈";
        document.querySelector("#kx").click();
        try {
            document.querySelector('button.pn.pnc').click();
        } catch (err) {
            document.querySelector("a[onclick=\"showWindow('qwindow', 'qiandao', 'post', '0');return false\"]").click();
        }
        // showWindow('qwindow', 'qiandao', 'post', '0');
    }
    if (ym == "bbs.gter.net") {
        try {
            showWindow('dsu_paulsign', 'plugin.php?id=dsu_paulsign:sign&show=sign&0f60c218');
            document.querySelector('#eb321').click();
            showWindow('qwindow', 'qiandao', 'post', '0');
        } catch (err) {
            hideWindow('dsu_paulsign');
        }
    }
    if (ym == "www.tailsocks.com" || ym == "www.shadowsocks5.com")
        document.querySelector('.btn.btn-success').click();
    if (ym == 'bbs.kafan.cn' || ym == 'www.52pojie.cn') {
        let el = document.querySelector('.qq_bind');
        if (el.src != 'https://a.ikafan.com/plugin/dsu_amupper/images/wb.png' && el.src != 'https://www.52pojie.cn/static/image/common/qds.png')
            el.click();
    }
    if (ym == 'www.packtpub.com') {
        document.querySelector('#free-learning-claim').click();
    }
}, 2000);