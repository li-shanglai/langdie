window.Z={};Z.getSys=function(){var e={};var t=navigator.userAgent.toLowerCase();var a;(a=t.match(/msie ([\d.]+)/))?e.ie=a[1]:(a=t.match(/firefox\/([\d.]+)/))?e.firefox=a[1]:(a=t.match(/chrome\/([\d.]+)/))?e.chrome=a[1]:(a=t.match(/opera.([\d.]+)/))?e.opera=a[1]:(a=t.match(/version\/([\d.]+).*safari/))?e.safari=a[1]:0;return e};Z.addEvent=function(e,t,a,s){if(e.addEventListener){var n=s?true:false;e.addEventListener(t,a,n)}else if(e.attachEvent){e.attachEvent("on"+t,a)}};Z.delEvent=function(e,t,a,s){if(e.removeEventListener){var n=s?true:false;e.removeEventListener(t,a,n)}else if(e.detachEvent){e.detachEvent("on"+t,a)}};Z.getElemPos=function(e){var t,a;t=parseInt(e.getBoundingClientRect().left)||0;t-=parseInt(document.documentElement.clientLeft)||0;t+=parseInt(Math.max(document.body.scrollLeft,document.documentElement.scrollLeft))||0;a=parseInt(e.getBoundingClientRect().top)||0;a-=parseInt(document.documentElement.clientTop)||0;a+=parseInt(Math.max(document.body.scrollTop,document.documentElement.scrollTop))||0;return{x:t,y:a}};Z.getElemByClass=function(e,t,a){e=e||document;if(e.getElementsByClassName){return e.getElementsByClassName(t)}else{a=a||"*";var s=new RegExp("\\b"+t+"\\b");var n=new Array;var l=e.getElementsByTagName(a);for(i=0;i<l.length;i++){if(s.test(l[i].className)){n.push(l[i])}}return n}};Z.Ajax=function(set){var that=this;this.url=set.url;this.callback=set.callback||0;this.set=set||{};this.type=this.set.type||"POST";this.data=this.set.data||"";this.dataType=this.set.dataType||"json";this.before=this.set.before||0;this.data.toUpperCase();try{this.xmlHttp=new XMLHttpRequest}catch(e){try{this.xmlHttp=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{this.xmlHttp=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){alert("鎮ㄧ殑娴忚鍣ㄤ笉鏀寔ajax锛�")}}}var xmlHttp=this.xmlHttp;if(this.before){this.before()}xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState==4){if(xmlHttp.status==200&&that.callback){var res=xmlHttp.responseText;if(that.dataType=="json"){res=eval("("+res+")")}that.callback(res)}}};if(this.type=="POST"){xmlHttp.open(this.type,this.url,true);xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8;");xmlHttp.setRequestHeader("Cache-Control","no-cache");xmlHttp.send(this.data)}else{var url=this.url;if(this.data){if(url.indexOf("?")!=-1){url+="&"+this.data}else{url+="?"+this.data}}xmlHttp.open(this.type,url,true);xmlHttp.send(null)}};Z.getUrl=function(e,t){var a=new RegExp("(^|\\?|&)"+t+"=([^&]*)(\\s|&|$)","i");if(a.test(e)){return unescape(RegExp.$2.replace(/\+/g," "))}else{return""}};var LM={};(function(){var e=document.getElementById("back");if(e){Z.addEvent(window,"scroll",function(){var t=document.body.scrollTop||document.documentElement.scrollTop||0;if(t>100){e.style.display="block"}else{e.style.display="none"}})}if(document.getElementById("login")){var t=document.getElementById("login");var a=document.getElementById("reg");var s_t=document.getElementById("pop_menu_login");var s_a=document.getElementById("pop_menu_register");var n;var l_t=s_t.getElementsByTagName("a");var l_a=s_a.getElementsByTagName("a");t.onmouseover=function(e){e.stopPropagation();o();clearTimeout(n);var oThis=this;var timer=setTimeout(function(){var e=Z.getElemPos(oThis);s_t.style.left=e.x+1+"px";s_t.style.top="55px";s_t.style.display="block";this.className+=" active";a.className="a_1";l_t[0].href="https://ad.limei.com/site/login.html";l_t[1].href="https://data.limei.com";l_t[2].href="https://cj.limei.com/";l_t[3].href="https://sj.limei.com/assist/site/index.html?r=login";window.clearTimeout(timer)},150)};a.onmouseover=function(e){e.stopPropagation();o();clearTimeout(n);var oThis=this;var timer=window.setTimeout(function(){var e=Z.getElemPos(oThis);s_a.style.left=e.x+1+"px";s_a.style.top="55px";s_a.style.display="block";this.className+=" active";t.className="a_0";l_a[0].href="https://dsp.limei.com/site/register.html";l_a[1].href="https://dsp.limei.com/site/register.html";window.clearTimeout(timer)},150)};s_t.onmouseover=function(){clearTimeout(n)};s_a.onmouseover=function(){clearTimeout(n)};function o(){n=setTimeout(function(){s_t.style.display="none";s_a.style.display="none";t.className="a_0";a.className="a_1"},100)}t.onmouseleave=o;a.onmouseleave=o;s_t.onmouseleave=o;s_a.onmouseleave=o}})();