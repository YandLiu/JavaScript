// ==UserScript==
// @name        AMO Enhancer
// @namespace   https://github.com/YandLiu/Userscripts/
// @match       https://addons.mozilla.org/*
// @grant       none
// @version     1.0
// ==/UserScript==
try {
    var buttons = document.querySelectorAll('.button.add.concealed');
    for (var i of buttons)
        i.className = 'button add';
} catch (e) {}
try {
    document.querySelector('.addon-details .widgets').style.display = 'initial';
} catch (e) {}
