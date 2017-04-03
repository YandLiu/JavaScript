// ==UserScript==
// @name        TaobaoSearchGridToList
// @description 淘宝搜索结果网格模式转为列表模式
// @include     https://s.taobao.com/search?q=*
// @include     https://world.taobao.com/search/search.htm?*
// @version     1.0
// @run-at      document-start
// @grant       none
// ==/UserScript==
var olink = window.location.href;
if ( olink.match('style=grid') || olink.match('data-value=grid') )
    window.location.href = olink.replace(/grid/,'list');
else if ( olink.match('style=list')==null && olink.match('data-value=list')==null )
    window.location.href += '&style=list';
