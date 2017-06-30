// ==UserScript==
// @name        Mod Navigator
// @namespace   https://github.com/YandLiu/Userscripts
// @description https://www.firefox.net.cn/read-50000-2#read_342792
// @description https://www.firefox.net.cn/read-49979-1#read_341320
// @include	    http://*
// @include     https://ebank.spdb.com.cn/*
// @include     *://*.baidu.com/*
// @include     http://5sing.kugou.com/*
// @include     http://www.beiwo.ac/*
// @include     http://www.dongting.com/*
// @include     http://fm.dongting.com/*
// @include     http://www.duole.com/*
// @include     *://music.douban.com/*
// @include     http://music.163.com/*
// @exclude     http://music.163.com/demo/fm
// @version     1.0.1
// @grant       none
// @run-at      document-start
// ==/UserScript==
var a=location.hostname;
// if(a.search(/weixin.qq.com/)){
//     Object.defineProperty(navigator, 'userAgent', {
// 	get: function () {
// 	    return "Mozilla/5.0 (Linux; Android 5.1.1; MI 2 Build/LMY47V) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/39.0.0.0 Mobile Safari/537.36 MicroMessenger/6.3.7.59_r45d675b.642 NetType/DEFACE Language/en";
// 	}
//     });
// }

if(a=="ebank.spdb.com.cn"){
  Object.defineProperty(navigator, 'platform', {
    get: function () {
      return "Linux";
    }
  });
}
// if((a=="pan.baidu.com")|(a=="yun.baidu.com")){
//   Object.defineProperty(navigator, 'userAgent', {
//     get: function () {
//       return "Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30";
//     }
//   });
// }
if((a=="play.baidu.com")|(a=="fm.baidu.com")|(a=="5sing.kugou.com")|(a=="www.beiwo.ac")|(a=="www.dongting.com")|(a=="fm.dongting.com")|(a=="www.duole.com")|(a=="music.douban.com")|(a=="music.163.com")){
  Object.defineProperty(navigator, 'plugins', {
    get: function () {
      return { length: 0 };
    }
  });
}
