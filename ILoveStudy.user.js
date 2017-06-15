// ==UserScript==
// @name        ILoveStudy
// @namespace   Y L
// @include     *
// @version     1.3
// @grant       none
// @run-at      document-start
// ==/UserScript==
var myDate = new Date();
var myHour = myDate.getHours();
if (myHour>=23) {
  if(document.title.match('.*(动画|漫画|小说|动漫|贴吧|卡饭|海贼).+')||(document.location.href.match('.*(%E5%8A%A8%E7%94%BB|%E6%BC%AB%E7%94%BB|%E5%B0%8F%E8%AF%B4|%E5%8A%A8%E6%BC%AB|tieba|firefox.net.cn|onepiece.cc).+'))) {
      document.write("呵呵，还看动漫小说，就这样放弃自己的梦想？赶紧滚去学习！")
  }
}
