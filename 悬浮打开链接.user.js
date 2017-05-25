// ==UserScript==
// @name        悬浮打开链接
// @author      百度贴吧@网络孤独行客
// @namespace   test
// @description   在链接上悬浮出现方框，将鼠标移动至方框上便可打开链接
// @include     *
// @grant       none
// ==/UserScript==
(function(){
function addStyle(css) {
var head, style;
head = document.querySelectorAll('head')[0];
if (!head) { return; }
style = document.createElement('style');
style.innerHTML = css;
head.appendChild(style);
}
addStyle('#b {position:absolute;width:20px;height:20px;background:#e2e2e2;display:none;z-index:99999;');
var body = document.body;
var b = document.createElement("div");
b.id = "b";
body.appendChild(b);
function addEL(event) {
var a = event.target.getAttribute("href");
var py = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
var left = (event.clientX - 40 < 0) ? event.clientX + 20 : event.clientX - 35;
var top = (event.clientY - 40 < 0) ? event.clientY + py + 20 : event.clientY + py - 35;
b.style.display="block";
b.style.top=top+'px';
b.style.left=left+'px';
b.setAttribute("href",a);
}
var links = document.querySelectorAll("a");
for(i=0;i<links.length;i++){
links[i].addEventListener("mouseenter",addEL, false);
}
b.addEventListener("mouseenter",function(event){window.location.href=event.target.getAttribute("href");},false);
})();
