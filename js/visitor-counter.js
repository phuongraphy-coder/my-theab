/* រាប់អ្នកចូលមើល: ដំណើរការតែនៅពេលតំណមាន ?to=ឈ្មោះភ្ញៀវ ហើយ relay មានតម្លៃ */
(function(){try{var u=new URLSearchParams(location.search);if(!u.has("to"))return;var c=window.TGCFG||{};if(!c.relay)return;
var g=(u.get("to")||"").trim().slice(0,80),k="v_"+g;if(sessionStorage.getItem(k))return;sessionStorage.setItem(k,"1");
setTimeout(function(){try{fetch(c.relay,{method:"POST",mode:"no-cors",keepalive:true,headers:{"Content-Type":"text/plain"},body:JSON.stringify({type:"visit",guest:g,ref:document.referrer||"",lang:navigator.language||"",screen:screen.width+"x"+screen.height,ua:navigator.userAgent})})}catch(e){}},1500)}catch(e){}})();
