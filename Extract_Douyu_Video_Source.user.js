// ==UserScript==
// @name        Extract Douyu Video Source
// @namespace   https://github.com/YandLiu
// @author      YandLiu
// @match       https://vmobile.douyu.com/*
// @version     1.0
// @grant       none
// ==/UserScript==

var video = document.querySelector('#video');
setTimeout(
    function() {
        var source = video.src;
        console.log(source);
        document.querySelector('.video-describe-box').innerHTML = '<a href="' + source + '">' + source + '</a>';
    },
    1000
);
