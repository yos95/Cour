//Version 1.0.3
function loadNewPres(){loading.LoadingStart(),document.getElementsByTagName("body")[0].style.backgroundColor=presSettings.BackColr;var t=document.getElementById("resizer");t.style.height=presSettings.Height+"px",t.style.width=presSettings.Width+"px";var e=new Pcl;e.r(),window.onresize=e.r}var presSettings={},Presentation,isTouchDevice,isPlaying=!1;window.onload=function(){if(!document.createElement("canvas").getContext)return document.getElementById("resizer").innerHTML="",void document.write("Oops! Your browser does not support HTML5. You need to upgrade your browser to view this content.");Presentation=new DopPresentation(new eventsHandler),Presentation.SetRPath("data/");try{document.createEvent("TouchEvent"),isTouchDevice=!0}catch(t){isTouchDevice=!1}Presentation.LoadPres("pres",1)};var eventsHandler=function(){this.OnError=function(){},this.OnLoadingStart=function(){loading.LoadingStart()},this.OnLoadingEnd=function(){loading.LoadingEnd()},this.OnSlideChange=function(t){},this.OnMovToNxtAnim=function(){},this.OnMovToPrvAnim=function(){},this.OnPlayingStart=function(){},this.OnPlayingEnd=function(){},this.OnProgressChange=function(t){},this.OnSlideEnd=function(t){},this.OnSldOutlineLoad=function(t){},this.InitaliseSettings=function(t){presSettings=t,loadNewPres()}},loading=function(){function t(){document.getElementById("loadingImg").style.display="block"}function e(){document.getElementById("loadingImg").style.display="none"}return{LoadingStart:t,LoadingEnd:e}}();Pcl=function(){function t(){function t(){document.body.removeChild(window.iabho)}isTouchDevice&&(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))&&(window.iabho=document.createElement("div"),document.body.appendChild(window.iabho),window.iabho.style.height="1000px",setTimeout(t(),100),window.scrollTo(0,1))}function e(t){var e=t.toString();return e.indexOf("e")>0?Math.floor(t):t}this.r=function(){t();var n,i,s,o=window.innerWidth,r=window.innerHeight,g=document.getElementById("player");presSettings.MaxScale>0?(n=r>presSettings.Height*presSettings.MaxScale?presSettings.Height*presSettings.MaxScale:r,i=o>presSettings.Width*presSettings.MaxScale?presSettings.Width*presSettings.MaxScale:o):(n=r,i=o);var d;d=i<presSettings.Width||n<presSettings.Height?(presSettings.Width-i)/presSettings.Width<(presSettings.Height-n)/presSettings.Height?1-(presSettings.Height-n)/presSettings.Height:1-(presSettings.Width-i)/presSettings.Width:(i-presSettings.Width)/presSettings.Width>(n-presSettings.Height)/presSettings.Height?1+(n-presSettings.Height)/presSettings.Height:1+(i-presSettings.Width)/presSettings.Width,Presentation.SetScale(d),0==presSettings.MaxScale&&(i=presSettings.Width*d),g.style.height=e(n)+"px",g.style.width=e(i)+"px",g.style.top=e(r-n)/2+"px",g.style.left=e(o-i)/2+"px",s=document.getElementById("resizer"),s.style.webkitTransform="scale("+e(d)+")",s.style.MozTransform="scale("+e(d)+")",s.style.OTransform="scale("+e(d)+")",s.style.msTransform="scale("+e(d)+")";var a=document.getElementById("contentHolder");a.style.height=e(presSettings.Height*d)+"px",a.style.width=e(presSettings.Width*d)+"px",a.style.marginLeft=e((i-d*presSettings.Width)/2)+"px",a.style.marginTop=e((n-d*presSettings.Height)/2)+"px";var l=document.getElementById("loadingImg");l.style.height=e(presSettings.Height*d)+"px",l.style.width=e(presSettings.Width*d)+"px",l.style.marginTop=s.style.marginTop,l.style.marginLeft=s.style.marginLeft,null!=document.getElementById("play")&&(s=document.getElementById("play"),s.style.height=e(d*presSettings.Height)+"px",s.style.width=e(d*presSettings.Width)+"px")}};