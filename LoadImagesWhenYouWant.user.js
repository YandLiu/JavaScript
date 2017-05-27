// ==UserScript==
// @name        按需载图 
// @name:zh-CN  按需载图
// @name:en     Load images when you want 
// @namespace   qinweizhao@163.com
// @include     *
// @exclude     *www.dongting.com*
// @version     4.6.4
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @run-at      document-start
// @description         阻止图片加载，直到你把鼠标移到图片位置。还你一个清爽自由的页面！简洁主义者的福音，注意力涣散者的良药。
// @description:zh-CN   阻止图片加载，直到你把鼠标移到图片位置。还你一个清爽自由的页面！简洁主义者的福音，注意力涣散者的良药。
// @description:en      Block the images in the sites and load them automatically when your mouse is over them. 
// ==/UserScript==
//启用此脚本后，网页所有图片都被暂停加载，以加快网页加载速度。如果你想观看其中的图片，只需要将鼠标移到相应位置即可加载。
//If you use this JS on your webbroswer, all images-load in the sites will be stop and replaced with the text you define.Once you want to see some of them, just move your mouse over them and then they will be loaded automatically.


//=========全局变量声明区===========

var settings = {
    colorBack: '#00FFFF',
    backOpa: 0.2,
    timefadein: 300,
    minpx: 35,
    maxpx: 1000,
    bloBack: true,
    disablesite: ''
}

//载入设置
loadSettings();
var longText = {
    hideAllImgsCSS: 'img{display: none !important}',
    addCSSText: '\
img[caotuqinweizhao=yes] {\
display:none !important;\
\
}\
\
#settingPanelqinweizhao ul {\
	font-family: "微软雅黑" !important;\
	font-size: 14px !important;\
	position: fixed !important;\
	height: 500px !important;\
	width: 350px !important;\
	right: 20px !important;\
	bottom: 20px !important;\
	background-color: #FFFFFF !important;\
	border: thin dotted #F93 !important;\
	z-index: 9999 !important;\
	line-height: 24px !important;\
	padding: 10px !important;\
	list-style-type: none !important;\
	text-align: left !important;\
	margin: 10px !important;\
	display: block !important;	\
}\
\
#settingPanelqinweizhao ul li input {\
	background-color: #FFF !important;\
	border: 1px solid #F93 !important;\
	margin: 0px !important;\
	padding: 0px !important;\
}\
\
#settingPanelqinweizhao ul li #bloBackqinweizhao {\
	border-top-style: none;\
	border-right-style: none;\
	border-bottom-style: none;\
	border-left-style: none;\
}\
#settingPanelqinweizhao ul li input[type="button"] {\
	cursor: pointer !important;\
	color: #FFF  !important;\
	background-color: #F93 !important;\
	font-size: 14px !important;\
	font-family: "微软雅黑" !important;\
	height: 30px;\
	width: 40px;\
}\
\
#settingPanelqinweizhao ul li {\
	margin: 0px !important;\
	padding: 0px !important;\
	display: block !important;\
	float: none !important;\
}\
#settingPanelqinweizhao ul li #Disableqinweizhao {\
	width: 180px;\
}\
\
#settingPanelqinweizhao ul li label {\
	line-height: 24px !important;\
	height: auto !important;\
	width: auto !important;\
	color: #000 !important;\
}\
'
        +
        //===============样式更改特别注意，不要搞以下的行=================
        '.blockerqinweizhao {\
        display: inline-block;\
        height: 40px;\
        width: 40px;\
        position: relative !important;\
        z-index: 8999 !important;\
        visibility: visible !important;\
        \
        background:'
        + settings.colorBack +
        ';opacity:' + settings.backOpa + ';' +
        '}',
    panelHTML: '\
<div id="settingPanelqinweizhao" >\
  <ul>\
  \
    <li><font size="+1"><b>===按需载图 设置===</b></font></li>\
    <li>&nbsp;</li>\
    <li>\
      <label>挡块颜色代码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </label>\
     <input type="text" id="colorBackqinweizhao" size="10">\
    </li>\
    <li>\
      <label>挡块透明度(０～１)：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\
      <input type="text" id="backOpaqinweizhao" size="5">\
    </li>\
    <li>\
      <label>淡入动画时程 ms：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\
      <input type="text" id="timefadeinqinweizhao" size="5">\
    </li>\
    <li>\
      <label>挡块最大宽/高 px：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\
      <input type="text" id="maxpxqinweizhao" size="5">\
    </li>\
    <li>\
      <label>忽略宽高小于 px的图片：\
        <input type="text" id="minpxqinweizhao" size="5">\
      </label>\
    </li>\
    <li>\
      <input name="" type="checkbox" disabled id="bloBackqinweizhao" value="" checked style="visibility:hidden">\
      <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\
    </li>\
    \
    <li>\
      <a href="https://greasyfork.org/zh-CN/scripts/9416-%E6%8C%89%E9%9C%80%E8%BD%BD%E5%9B%BE"  target="_blank" color="blue"><font color="blue"><u>查看更新说明页</u></font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;\
      <input type="button" id="okqinweizhao" value="确认">\
      &nbsp;\
      <input name="" type="button" id="cancelqinweizhao" value="取消">\
    </li>\
    <li>&nbsp;</li>\
    <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name="" type="button" id="Disableqinweizhao" value="在此网站上禁用" ></li>\
    <li>&nbsp;</li>\
    <li><font color="#FF0000"><b>朕要反馈！移驾：</b></font> <a href="http://tieba.baidu.com/p/3719456891"  target="_black" color="blue"><font color="blue"><u>chrome吧</u></font></a> &nbsp;&nbsp;<a href="http://tieba.baidu.com/p/3718893651"  target="_black"color="blue"><font color="blue"><u>火狐吧</u></font></a>&nbsp;&nbsp; <a href="https://greasyfork.org/zh-CN/forum/post/discussion?script=9416" target="_blank"color="blue"><font color="blue"><u>GreasyFork</u></font></a> &nbsp;&nbsp; <a href="https://www.firefox.net.cn/read-50546-1" target="new"color="blue"><font color="blue"><u>火狐中文社区</u></font></a>\
    &nbsp;&nbsp;&nbsp;\
    </li>\
       \
  </ul>\
</div>',

    enablePHtml: '\
<div id="enablePqinweizhao" style="display:none;">\
 <ul style="font-family: &quot;微软雅黑&quot; !important;font-size: 14px !important;	position: fixed !important;height: 300px !important;width: 350px !important;right: 20px !important;bottom: 20px !important;background-color: #FFFFFF !important;	border: thin dotted #F93 !important;z-index: 9999 !important;	line-height: 24px !important;padding: 10px !important;list-style-type: none !important;text-align: left !important;margin: 10px !important;	display: block !important">  \
    <li><font size="+1"><b>===按需载图 设置===</b></font></li>\
    <li>&nbsp;</li>\
    <li><input name="" type="button" id="enabSiqinweizhao" style="cursor: pointer !important;color: #FFF  !important;	background-color: #F93 !important;font-size: 14px !important;font-family: &quot;微软雅黑&quot; !important;height: 30px;width: 180px; border: 1px solid #F93;"  value="在此网站上启用" > \
    <input name="" type="button" id="cancelenableqinweizhao" style="cursor: pointer !important;color: #FFF  !important;	background-color: #F93 !important;font-size: 14px !important;font-family: &quot;微软雅黑&quot; !important;height: 30px;width: 50px; border: 1px solid #F93;" value="取消"></li>\
     <li>&nbsp;</li>\
    <li><font color="#FF0000"><b>朕要反馈！移驾：</b></font> <a href="http://tieba.baidu.com/p/3719456891"  target="_black" color="blue"><font color="blue"><u>chrome吧</u></font></a> &nbsp;&nbsp;<a href="http://tieba.baidu.com/p/3718893651"  target="_black"color="blue"><font color="blue"><u>火狐吧</u></font></a>&nbsp;&nbsp; <a href="https://greasyfork.org/zh-CN/forum/post/discussion?script=9416" target="_blank"color="blue"><font color="blue"><u>GreasyFork</u></font></a> &nbsp;&nbsp; <a href="https://www.firefox.net.cn/read-50546-1" target="new"color="blue"><font color="blue"><u>火狐中文社区</u></font></a>\
    &nbsp;&nbsp;&nbsp;\
    </li>\
    </ul>\
</div>',
    imgHTML: '<img src="data:image/png;base64,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" name="botLogoqinweizhao" id="botLogoqinweizhao" title="按需载图设置" style="opacity:0.5; position: fixed;z-index: 9998;bottom: 20px;right: 20px;cursor: pointer;" \
onMouseOver="(function () {\    document.getElementById(&quot;botLogoqinweizhao&quot;).style.opacity = 1;\
})();" \
onMouseOut="(function () {\    document.getElementById(&quot;botLogoqinweizhao&quot;).style.opacity = 0.5;\
})();" >'
}
var ali = function (node, event, func) {
    node.addEventListener(event, func, false);
};
var numCount = 0;
var vpms = 50 / settings.timefadein;
var conCSS = 'color:red;background:yellow';

//检查禁用名单
if (settings.disablesite.indexOf(top.location.host) > -1) {
    if (top.location == location) {
        ali(document, 'DOMContentLoaded', function () {
            var setImg = document.createElement('div');
            setImg.innerHTML = longText.imgHTML;
            document.body.appendChild(setImg);
            var enableP = document.createElement('div');
            enableP.innerHTML = longText.enablePHtml;
            document.body.appendChild(enableP);
            setImg.onclick = enableSitePanel;
        })
    }
} else {

    //=============执行函数区============
    GM_addStyle(longText.addCSSText);

    //隐藏全部图片
    var style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'cssbyqinweizhao'
    style.textContent = longText.hideAllImgsCSS;
    document.head.appendChild(style);

    //4.3.0
    if (GM_getValue("maxChanged430", false) == false) {
        settings.maxpx = 1000;
        GM_setValue('maxpx', 1000);
        GM_setValue("maxChanged430", true);
    }

    setTimeout(function () {
        if (document.images.length < 2) {
            document.getElementById('cssbyqinweizhao').textContent = '';
        }
    }, 1000);


    //页面载入完成时开始工作
    ali(document, 'DOMContentLoaded', function () {
        document.addEventListener('DOMNodeInserted', function (e) {
            if (e.target.nodeName == 'IMG' && e.target.getAttribute('bloIdqinweizhao') == null) {
                blockThisImg(e.target);
                checkLoad(e.target, 100);
            }
        })
        beginWork();
        clearHideAllCSS();
    });
    setTimeout(function () { clearHideAllCSS() }, 7000)
}


//============开发中的公用函数区============
function enableSitePanel() {
    document.getElementById('enablePqinweizhao').style.display = 'block';
    ali(document.getElementById('enabSiqinweizhao'), 'click', enableThisSite);
    ali(document.getElementById('cancelenableqinweizhao'), 'click', cancleEnable);
}

function enableThisSite() {
    settings.disablesite = settings.disablesite.replace(top.location.host + ',', '');
    GM_setValue('disablesite', settings.disablesite);
    location.reload();
}

function cancleEnable() {
    document.getElementById('enablePqinweizhao').style.display = 'none';
    document.getElementById('botLogoqinweizhao').onclick = function () {
        document.getElementById('enablePqinweizhao').style.display = 'block';
    }

}

function clearHideAllCSS() {
    if (document.getElementById('cssbyqinweizhao').textContent != "") document.getElementById('cssbyqinweizhao').textContent = "";
}

function setMO(img) {
    var mosrc = new MutationObserver(srcChanged);
    mosrc.observe(img, {
        attributes: true,
        attributeFilter: ["src"]
    });
}


function srcChanged(records) {
    records.forEach(function (mutationRecord) {
        var img = mutationRecord.target;
        img.setAttribute("caotuqinweizhao", "yes");
        setImgWandH(img);
        var blocker = document.getElementById(img.getAttribute('bloIdqinweizhao'));
        blocker.style.zIndex = 8999;
        blocker.style.display = "inline-block";
    }
)
}

function filtimg(img) {
    var bloFID = img.getAttribute('bloIdqinweizhao');
    if (bloFID == null) return;
    var blocker = document.getElementById(bloFID);
    blocker.style.display = 'none';
    blocker.style.zIndex = -1;
    img.removeAttribute("caotuqinweizhao");
    setMO(img);
}
function setImgWandH(imgLoaded) {
    var w = imgLoaded.width;
    var h = imgLoaded.height;
    var sw = getComputedStyle(imgLoaded).width;
    var sh = getComputedStyle(imgLoaded).height;
    var mw = getComputedStyle(imgLoaded).maxWidth;
    var mh = getComputedStyle(imgLoaded).maxHeight;
    var wid;
    var hei;
    if (mw != "none" && mw.indexOf("%") < 0) {
        wid = parseInt(mw);
        if (wid > settings.maxpx) {
            wid=settings.maxpx
        }
    }
    else if (sw.indexOf("px") > -1) wid = parseInt(sw);
    else if (sw.indexOf("%") > -1) wid = sw;
    else wid = w;

    if (mh != "none" && mh.indexOf("%") < 0) {
        hei = parseInt(mh);
        if (hei > settings.maxpx) {
            hei = settings.maxpx
        }
    }
    else if (sh.indexOf("px") > -1) hei = parseInt(sh);
    else if (sh.indexOf("%") > -1) hei = sh;
    else hei = h;
    if (wid != sw) document.getElementById(imgLoaded.getAttribute('bloIdqinweizhao')).style.width = wid > settings.maxpx ? settings.maxpx + 'px' : wid + 'px';
    else document.getElementById(imgLoaded.getAttribute('bloIdqinweizhao')).style.width = wid;
    if (hei != sh) document.getElementById(imgLoaded.getAttribute('bloIdqinweizhao')).style.height = hei > settings.maxpx ? settings.maxpx + 'px' : hei + 'px';
    else document.getElementById(imgLoaded.getAttribute('bloIdqinweizhao')).style.height = hei;
}
function showSetPanel() {
    var panel = document.getElementById('settingPanelqinweizhao');
    if (panel == null) {
        var setPanel = document.createElement('div');
        setPanel.innerHTML = longText.panelHTML;
        document.body.appendChild(setPanel);
    }
    openSettingPanel();
}
function blockThisImg(img) {
    if (img.hasAttribute('bloIdqinweizhao')) return;
    img.setAttribute("caotuqinweizhao", "yes");
    var blocker = document.createElement('span');
    blocker.id = 'bloqinweizhao' + numCount;
    if (img.id == '') img.id = 'imgqinweizhao' + numCount;
    blocker.className = 'blockerqinweizhao ' + img.className;
    blocker.setAttribute('imgRelId', img.id);
    img.setAttribute('bloIdqinweizhao', blocker.id)
    img.setAttribute('srcqinweizhao', img.src);
    img.parentNode.insertBefore(blocker, img);
    blocker.onmouseover = function (e) {
        showImgs(e.target)
    }
    numCount += 1;
}
function beginWork() {
    if (top.location == location) {
        var setImg = document.createElement('div');
        setImg.innerHTML = longText.imgHTML;
        document.body.appendChild(setImg);
        setImg.onclick = showSetPanel;
    }
    var imgs = document.images;
    for (var i = 0; i < imgs.length; i++) {
        if (imgs[i].id == 'botLogoqinweizhao') continue;
        blockThisImg(imgs[i]);
        checkLoad(imgs[i], 100);
    }
}
function checkLoad(imgcheck, t) {
    if (t > 3000) return;
    if (imgcheck.width > 0 || imgcheck.height > 0) {
        whenImgLoad(imgcheck);
    }
    else {
        setTimeout(function () {
            checkLoad(imgcheck, t + 50)
        }, t + 50);
    }
}
function whenImgLoad(img) {
    if (img.height <= settings.minpx || img.width <= settings.minpx ) filtimg(img);
    else setImgWandH(img);
}
function openSettingPanel() {
    loadSettings();
    document.getElementById('colorBackqinweizhao').value = settings.colorBack;
    document.getElementById('backOpaqinweizhao').value = settings.backOpa;
    document.getElementById('timefadeinqinweizhao').value = settings.timefadein;
    document.getElementById('minpxqinweizhao').value = settings.minpx;
    document.getElementById('maxpxqinweizhao').value = settings.maxpx;
    document.getElementById('bloBackqinweizhao').checked = settings.bloBack; //
    document.getElementById('settingPanelqinweizhao').style.display = 'block';
    ali(document.getElementById('cancelqinweizhao'), 'click', closePanelqinweizhao);
    ali(document.getElementById('okqinweizhao'), 'click', saveSettingsqinweizhao);
    ali(document.getElementById('Disableqinweizhao'), 'click', disableThisSite);
}

function disableThisSite() {
    document.getElementById('settingPanelqinweizhao').style.display = 'none';
    settings.disablesite += top.location.host + ',';
    GM_setValue('disablesite', settings.disablesite);
    top.location.reload();
}
//=========稳定的公用函数区==========

function closePanelqinweizhao() {
    document.getElementById('settingPanelqinweizhao').style.display = 'none';
    document.getElementById('botLogoqinweizhao').onclick = function () {
        document.getElementById('settingPanelqinweizhao').style.display = 'block';
    }
}
function showImgs(blo) {
    var img = document.getElementById(blo.getAttribute('imgRelId'));
    img.style.opacity = 0;
    img.removeAttribute("caotuqinweizhao");
    if (img.src != img.getAttribute('srcqinweizhao') && img.style.display == 'none') { img.style.display = 'inline-block' }
    blo.parentNode.removeChild(blo);
    fadeIn(img, 0);
}
function saveSettingsqinweizhao() {
    closePanelqinweizhao();
    GM_setValue('colorBack', document.getElementById('colorBackqinweizhao').value);
    GM_setValue('backOpa', document.getElementById('backOpaqinweizhao').value);
    GM_setValue('timefadein', document.getElementById('timefadeinqinweizhao').value);
    GM_setValue('minpx', document.getElementById('minpxqinweizhao').value);
    GM_setValue('maxpx', document.getElementById('maxpxqinweizhao').value);
    GM_setValue('bloBack', document.getElementById('bloBackqinweizhao').checked);
}
function loadSettings() {
    settings.colorBack = GM_getValue('colorBack', settings.colorBack);
    settings.backOpa = GM_getValue('backOpa', settings.backOpa);
    settings.timefadein = GM_getValue('timefadein', settings.timefadein);
    settings.minpx = GM_getValue('minpx', settings.minpx);
    settings.maxpx = GM_getValue('maxpx', settings.maxpx);
    settings.bloBack = GM_getValue('bloBack', settings.bloBack);
    settings.disablesite = GM_getValue('disablesite', settings.disablesite);
}
function fadeIn(img, val) {
    val += vpms;
    if (img.style.opacity < 1) {
        img.style.opacity = val;
        setTimeout(function () {
            fadeIn(img, val);
        }, 50);
    } else {
        img.style.opacity = 1;
    }
}
function isEndWith(str, chr) {
    var d = str.length - chr.length;
    return (d >= 0 && str.lastIndexOf(chr) == d)
}
