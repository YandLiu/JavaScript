// ==UserScript==
// @name        GetFlashPluginEasily
// @namespace   https://bitbucket.org/AlwaysWithYou/
// @description add a link to download the whole flash player install package
// @include     https://get.adobe.com/*/flashplayer/*
// @include     https://get2.adobe.com/*/flashplayer/*
// @include     https://get3.adobe.com/*/flashplayer/*
// @run-at      document-end
// @version     1
// @grant       none
// ==/UserScript==
//https://fpdownload.macromedia.com/get/flashplayer/current/licensing/win/install_flash_player_19_active_x.exe
//https://fpdownload.macromedia.com/get/flashplayer/current/licensing/win/install_flash_player_19_plugin.exe
var debugnpapilink = document.createElement("a");
var npapilink = document.createElement("a");
var debugielink = document.createElement("a");
var ielink = document.createElement("a");
debugnpapilink.innerHTML = "latest debug version for other browsers<br/><br/>";
npapilink.innerHTML = "latest version for other browsers<br/><br/>";
debugielink.innerHTML = "latest debug version for IE<br/><br/>";
ielink.innerHTML = "latest version for IE<br/><br/>";
window.setTimeout(
    function(){
        var olink = document.getElementById('buttonDownload');
        debugnpapilink.href = olink.href.replace(/^.+installer=FP_(\d{2})_.+/, "http://download.macromedia.com/pub/flashplayer/updaters/$1/flashplayer_$1_plugin_debug.exe");
        npapilink.href = olink.href.replace(/^.+installer=FP_(\d{2})_.+/, "https://fpdownload.macromedia.com/get/flashplayer/current/licensing/win/install_flash_player_$1_plugin.exe");
        debugielink.href = olink.href.replace(/^.+installer=FP_(\d{2})_.+/, "http://download.macromedia.com/pub/flashplayer/updaters/$1/flashplayer_$1_ax_debug.exe");
        ielink.href = olink.href.replace(/^.+installer=FP_(\d{2})_.+/, "https://fpdownload.macromedia.com/get/flashplayer/current/licensing/win/install_flash_player_$1_active_x.exe");
        olink.parentNode.parentNode.insertBefore(npapilink, olink.parentNode);
        olink.parentNode.parentNode.insertBefore(ielink, olink.parentNode);
        olink.parentNode.parentNode.insertBefore(debugnpapilink, olink.parentNode);
        olink.parentNode.parentNode.insertBefore(debugielink, olink.parentNode);
    },1000
);


// 另一种方法
// window.addEventListener(
//     "onload",
//     window.setTimeout(function(){
//         alert(document.getElementById("buttonDownload").href);
//     }, 650)
// );
