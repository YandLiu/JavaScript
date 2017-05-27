// ==UserScript==
// @name        gwdang
// @namespace   no
// @description 购物党比价工具
// @include     http://*.jd.com/*
// @include     https://*.jd.com/*
// @include     http://*.taobao.com/*
// @include     https://*.taobao.com/*
// @include     http://*.tmall.com/*
// @include     https://*.tmall.com/*
// @include     http://*.yixun.com/*
// @include     http://*.51buy.com/*
// @include     http://*.amazon.cn/*
// @include     http://*.yhd.com/*
// @include     http://*.suning.com/*
// @include     http://*.dangdang.com/*
// @include     http://*.gome.com.cn/*
// @include     http://*.newegg.cn/*
// @include     http://*.paipai.com/*
// @version     1.0
// @grant 		none
// ==/UserScript==
(function(){
var s = document.createElement('script');s.setAttribute('src','https://browser.gwdang.com/get.js?f=/js/gwdang_extension.js');document.body.appendChild(s);
})()