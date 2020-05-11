// ==UserScript==
// @name        Wechat Article Tools
// @author      Yandong
// @namespace   https://github.com/YandLiu/Userscripts/
// @description 相关文章可点击; 文章标题
// @match       https://mp.weixin.qq.com/s*
// @grant       none
// @version     1.0
// ==/UserScript==

window.onscroll = () => {
    document.title = document.querySelector("#activity-name").innerText;
};

document.addEventListener("DOMNodeInserted", () => {
    let links = document.querySelectorAll("#js_related>a");
    links.forEach((i) => {
        i.href = i.getAttribute("data-url");
    });
});
