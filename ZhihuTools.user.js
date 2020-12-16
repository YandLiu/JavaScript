// ==UserScript==
// @name        Zhihu Tools
// @author      Yandong
// @namespace   https://github.com/YandLiu/Userscripts
// @description 置前回答时间、专栏文章发表时间；自动播放GIF; 自动展开被折叠的回答
// @version     0.12
// @match       *://*.zhihu.com/*
// @run-at      document-end
// @grant       none
// ==/UserScript==
"use strict";
/* 自动播放 GIF
    测试页面:
    专栏: https://zhuanlan.zhihu.com/p/84896463
    回答: https://www.zhihu.com/question/293750009
*/
function loadGIF() {
    // let gifs = document.querySelectorAll(".ztext-gif");
    // gifs.forEach((i) => {
    //     i.src = i.src.replace(/jpg$/g, "webp");
    //     i.parentNode.classList.add("isPlaying");
    // });
}

/* 置前时间 */
function moveTime() {
    let time = document.querySelectorAll(".ContentItem-time");
    time.forEach((i) => {
        if (i.parentNode.className == "") {
            // 普通回答
            i.parentNode.parentNode.insertAdjacentElement(
                "afterbegin",
                i.parentNode
            );
        } else {
            // 专栏文章
            i.parentNode.insertAdjacentElement("afterbegin", i);
        }
    });
}

function operate() {
    // 展开被折叠的回答
    try {
        document.querySelector(".CollapsedAnswers-bar button").click();
    } catch (e) { }
    // 展开被折叠的更多回答
    try {
        document.querySelector("button.QuestionMainAction").click();
    } catch (e) { }
    moveTime();
    // loadGIF();
}

window.onload = () => {
    if (document.location.hostname == "www.zhihu.com") {
        operate();
    }
}

window.onscroll = () => {
    operate();
};
