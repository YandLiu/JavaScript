// ==UserScript==
// @name        GetFlashPluginEasily
// @namespace   https://github.com/YandLiu/Userscripts/
// @description Add links to download adobe flash player directely
// @include     /^https://get(\d)?\.adobe\.com/([^/]+/)?flashplayer/.*/
// @run-at      document-idle
// @version     1.0
// @grant       none
// ==/UserScript==

var npapilink = document.createElement("a");
var ielink = document.createElement("a");
var ppapilink = document.createElement("a");

npapilink.innerHTML = "latest NPAPI version<br/><br/>";
ielink.innerHTML = "latest ActiveX version<br/><br/>";
ppapilink.innerHTML = "latest PPAPI version<br/><br/>";

npapilink.href = 'https://fpdownload.macromedia.com/pub/flashplayer/latest/help/install_flash_player.exe';
ielink.href = 'https://fpdownload.macromedia.com/pub/flashplayer/latest/help/install_flash_player_ax.exe';
ppapilink.href = 'https://fpdownload.macromedia.com/pub/flashplayer/latest/help/install_flash_player_ppapi.exe';

var olink = document.getElementById('AUTO_ID_columnright_p_note');
olink.parentNode.insertBefore(npapilink, olink);
olink.parentNode.insertBefore(ielink, olink);
olink.parentNode.insertBefore(ppapilink, olink);
