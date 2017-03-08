// ==UserScript==
// @name        Jump2GithubPage
// @description Jump to corresponding Github page from a Github user content page.
// @include     https://raw.githubusercontent.com/*
// @exclude     *.user.js
// @version     1.1
// @grant       none
// @namespace https://greasyfork.org/users/8333
// ==/UserScript==

var olink = window.location.href;
var x = confirm('是否打开对应的Github页面 (注意：需要允许弹出窗口或对raw.githubusercontent.com添加例外');
if(x){
    link = olink.replace(/^https:\/\/raw\.githubusercontent\.com\/(.+?\/.+?\/)(.+?\/)((.+\/)*).+/,'https://github.com/$1tree/$2$3');
    location.assign(link);
}
