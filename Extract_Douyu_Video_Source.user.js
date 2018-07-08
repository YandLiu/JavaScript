// ==UserScript==
// @name Extract Douyu Video Source
// @namespace https://github.com/YandLiu
// @author YandLiu
// @match https://vmobile.douyu.com/*
// @grant none
// ==/UserScript==

var video = document.querySelector('#video');
var source = video.src;
document.querySelector('.video-describe-box').innerHTML = '<a href="' + source + '">' + source + '</a>';
