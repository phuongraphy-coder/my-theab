// ═══════ [1] <script> · (function(){ ═══════

(function(){
  /* ===== ការកំណត់ថ្ងៃពិធី (កែត្រង់នេះតែមួយកន្លែង) =====
     ថ្ងៃទី២ = ថ្ងៃពិធីចម្បង (ម៉ោង ៥ ល្ងាច) · ថ្ងៃទី១ = មួយថ្ងៃមុន
     ថ្ងៃសប្តាហ៍ និងថ្ងៃខែខ្មែរ គណនាដោយស្វ័យប្រវត្តិពីថ្ងៃខែនេះ */
  var EV={y:2026,m:11,d:29,hh:17,mm:0};
  var kh="០១២៣៤៥៦៧៨៩",lang="km";
  function p2(x){return(x<10?"0":"")+x}
  var T=new Date(EV.y+"-"+p2(EV.m)+"-"+p2(EV.d)+"T"+p2(EV.hh)+":"+p2(EV.mm)+":00+07:00");   /* ម៉ោងភ្នំពេញ (UTC+7) */
  var mk=["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"],
      me=["January","February","March","April","May","June","July","August","September","October","November","December"],
      wk=["អាទិត្យ","ច័ន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ","សៅរ៍"],
      we=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var ERA="ឆ្នាំមមី អដ្ឋស័ក ព.ស.២៥៧០";
  function kn(x){return String(x).replace(/\d/g,function(c){return kh[c]})}
  function n(x){return lang==="km"?kn(x):String(x)}
  function $(i){return document.getElementById(i)}
  function put(i,h){var e=$(i);if(e)e.innerHTML=h}
  function ord(d){var r=d%100;if(r>=11&&r<=13)return d+"th";return d+({1:"st",2:"nd",3:"rd"}[d%10]||"th")}
  /* ថ្ងៃទី២ = EV, ថ្ងៃទី១ = EV − ១ ថ្ងៃ (គណនាជា UTC ដើម្បីកុំឱ្យប្រែតាមល្វែងម៉ោងអ្នកមើល) */
  function day(off){var u=new Date(Date.UTC(EV.y,EV.m-1,EV.d+off));return{y:u.getUTCFullYear(),m:u.getUTCMonth(),d:u.getUTCDate(),w:u.getUTCDay()}}
  /* ថ្ងៃខែខ្មែរ៖ ត្រឹមត្រូវសម្រាប់ខែកត្តិក ឆ្នាំ២០២៦ (១០ វិច្ឆិកា = ១កើត · ១៥កើត = ២៤ វិច្ឆិកា (បុណ្យអុំទូក) · ៩ ធ្នូ = ១៥រោច)
     ប្រសិនបើប្តូរទៅថ្ងៃក្រៅចន្លោះនេះ បន្ទាត់ថ្ងៃខែខ្មែរនឹងបាត់ ត្រូវបញ្ចូលដោយដៃ */
  function lunar(o){var k=Math.round((Date.UTC(o.y,o.m,o.d)-Date.UTC(2026,10,10))/864e5)+1;
    if(k<1||k>30)return"";return k<=15?kn(k)+"កើត ខែកត្តិក":kn(k-15)+"រោច ខែកត្តិក"}
  function longDate(o){return lang==="km"?"ថ្ងៃ"+wk[o.w]+" ទី"+n(o.d)+" ខែ"+mk[o.m]+" ឆ្នាំ"+n(o.y):we[o.w]+", "+ord(o.d)+" "+me[o.m]+" "+o.y}
  function timeTxt(){return lang==="km"?"ម៉ោង "+n(EV.hh>12?EV.hh-12:EV.hh)+":"+n(p2(EV.mm))+" ល្ងាច":(EV.hh>12?EV.hh-12:EV.hh)+":"+p2(EV.mm)+" PM"}
  function dateBlock(o){
    return '<div class="mo">'+(lang==="km"?"ខែ"+mk[o.m]:me[o.m].toUpperCase())+'</div>'+
      '<div class="row"><div class="sd">'+(lang==="km"?"ថ្ងៃ"+wk[o.w]:we[o.w].toUpperCase())+'</div><div class="bg">'+n(o.d)+'</div><div class="sd">'+(lang==="km"?"ឆ្នាំ"+n(o.y):o.y)+'</div></div>'+
      '<div class="tm">'+timeTxt()+'</div>'}
  function dates(){
    var o=day(0),o1=day(-1);
    put("bigDay",n(o.d));put("bigDay2",n(o.d));
    put("wd1",lang==="km"?"ថ្ងៃ"+wk[o.w]:we[o.w].slice(0,3));put("wd2",lang==="km"?"ថ្ងៃ"+wk[o.w]:we[o.w].slice(0,3));
    document.querySelectorAll(".mb").forEach(function(e){e.textContent=lang==="km"?"ខែ"+mk[o.m]:me[o.m]});
    document.querySelectorAll(".yb").forEach(function(e){e.textContent=n(o.y)});
    put("fullDate",longDate(o));
    put("cvDate",longDate(o));put("cvTime",lang==="km"?"វេលា"+timeTxt():"at "+timeTxt());
    put("dtx1",dateBlock(o));put("dtx2",dateBlock(o));put("dtx4",dateBlock(o));
    put("dd1",longDate(o1));put("dd2",longDate(o));
    var L=lunar(o);
    put("rinv",lang==="km"
      ?"ថ្ងៃ"+wk[o.w]+(L?" "+L+" "+ERA:"")+"<br>ត្រូវនឹងថ្ងៃទី"+n(o.d)+" ខែ"+mk[o.m]+" ឆ្នាំ"+n(o.y)+"<br>វេលា"+timeTxt()
      :we[o.w]+", "+o.d+" "+me[o.m]+" "+o.y+"<br>at "+timeTxt());
  }
  function cal(){var o=day(0),f=new Date(Date.UTC(o.y,o.m,1)).getUTCDay(),L=new Date(Date.UTC(o.y,o.m+1,0)).getUTCDate(),
      hk=["អា","ច","អ","ព","ព្រ","សុ","ស"],he=["S","M","T","W","T","F","S"],h=lang==="km"?hk:he,
      r="<h4>"+(lang==="km"?"ខែ"+mk[o.m]+" "+n(o.y):me[o.m]+" "+o.y)+"</h4><div class='g'>";
    h.forEach(function(x){r+="<b>"+x+"</b>"});for(var i=0;i<f;i++)r+="<span></span>";
    for(i=1;i<=L;i++)r+="<span"+(i===o.d?" class='on'":"")+">"+n(i)+"</span>";
    $("rcal").innerHTML=r+"</div>"}
  function tick(){var s=Math.max(0,Math.floor((T-new Date())/1000));
    var v={d:Math.floor(s/86400),h:Math.floor(s%86400/3600),m:Math.floor(s%3600/60),s:s%60};
    for(var k in v)$(k).textContent=n(v[k])}
  function apply(){
    document.documentElement.lang=lang;
    document.querySelectorAll("[data-k]").forEach(function(e){e.innerHTML=lang==="km"?e.dataset.k:e.dataset.e});document.querySelectorAll("[data-ph-k]").forEach(function(e){e.placeholder=lang==="km"?e.dataset.phK:e.dataset.phE});
    $("lk").className=lang==="km"?"on":"";$("le").className=lang==="en"?"on":"";
    dates();cal();tick();
  }
  $("lang").onclick=function(){lang=lang==="km"?"en":"km";apply()};
  var TM=[],introOn=false;
  function at(ms,f){TM.push(setTimeout(f,ms))}
  function vidCtl(id){var v=$("vid");if(!v)return;if(id==="s2"){v.currentTime=0;v.muted=false;var r=v.play();if(r&&r.catch)r.catch(function(){v.muted=true;v.play().catch(function(){})})}else{v.pause()}}
  function scene(id){vidCtl(id);["s2"].forEach(function(k){var e=$(k);
    if(k===id){e.classList.remove("out");e.classList.add("on")}
    else if(e.classList.contains("on")){e.classList.remove("on");e.classList.add("out");setTimeout(function(){e.classList.remove("out")},900)}})}
  function swipeHint(){return;var h=$("swipe"),done=false,ev=["scroll","touchstart","wheel","keydown","pointerdown"];
    function hide(){if(done)return;done=true;h.classList.remove("show");ev.forEach(function(e){removeEventListener(e,hide)})}
    h.classList.add("show");setTimeout(hide,4500);
    setTimeout(function(){if(!done)ev.forEach(function(e){addEventListener(e,hide,{passive:true})})},700)}
  function endIntro(){var vv=$("vid");if(vv)vv.pause();TM.forEach(clearTimeout);TM=[];if(!introOn)return;introOn=false;
    $("cover").style.display="none";
    ["s2"].forEach(function(k){$(k).classList.remove("on","out");$(k).style.display="none"});
    document.body.classList.remove("intro");$("skip").classList.remove("show");
    window.scrollTo({top:$("s4").offsetTop,behavior:"instant"});swipeHint();window.startBgm&&window.startBgm()}
  $("skip").onclick=endIntro;
  $("openBtn").onclick=function(){
    var c=$("cover"),s=$("s2"),b=$("openBtn");
    if(matchMedia("(prefers-reduced-motion:reduce)").matches){c.style.display="none";["s2"].forEach(function(k){$(k).style.display="none"});window.startBgm&&window.startBgm();return}
    if(introOn)return;introOn=true;
    document.body.classList.add("intro");$("skip").classList.add("show");
    var W=innerWidth,H=innerHeight,r=b.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
    var sl=s.getBoundingClientRect().left,R=Math.hypot(Math.max(cx,W-cx),Math.max(cy,H-cy))*1.06,D=1500,EA="cubic-bezier(.65,0,.25,1)";
    c.classList.add("fade");
    
    function burst(x,y){
      for(var i=0;i<26;i++)(function(){
        var p=document.createElement("i"),a=Math.random()*Math.PI*2,d=90+Math.random()*Math.min(W,H)*.55,z=7+Math.random()*7;
        p.className="bp";p.style.cssText="left:"+x+"px;top:"+y+"px;width:"+z+"px;height:"+(z*1.3)+"px";document.body.appendChild(p);
        var an=p.animate([{transform:"translate(-50%,-50%) rotate(0deg) scale(.4)",opacity:0},{opacity:1,offset:.15},{transform:"translate("+(Math.cos(a)*d)+"px,"+(Math.sin(a)*d-40)+"px) rotate("+(Math.random()*540-270)+"deg) scale(1)",opacity:0}],{duration:1400+Math.random()*900,easing:"cubic-bezier(.2,.7,.3,1)",delay:Math.random()*250});
        an.onfinish=function(){p.remove()};
      })();
    }
    at(300,function(){
      s.style.zIndex=81;s.style.transition="transform 1.6s cubic-bezier(.2,.7,.2,1),visibility 0s";
      s.animate([{clipPath:"circle(0px at "+(cx-sl)+"px "+cy+"px)"},{clipPath:"circle("+R+"px at "+(cx-sl)+"px "+cy+"px)"}],{duration:D,easing:EA,fill:"both"});
      scene("s2");
      var ring=document.createElement("div");ring.className="bloom";ring.style.left=cx+"px";ring.style.top=cy+"px";document.body.appendChild(ring);
      ring.animate([{width:"0px",height:"0px",opacity:1},{width:(2*R)+"px",height:(2*R)+"px",opacity:.9,offset:.7},{width:(2*R)+"px",height:(2*R)+"px",opacity:0}],{duration:D,easing:EA}).onfinish=function(){ring.remove()};
      burst(cx,cy);
    });
    at(300+D+100,function(){c.style.display="none";s.style.zIndex="";s.style.transition=""});
    at(14800,endIntro);   /* ចាក់វីដេអូ ១៣.៤ វិនាទី រួចចូលទំព័រសំបុត្រ */
  };
  var bgm=$("bgm"),sb=$("bgmBtn");if(bgm.getAttribute("src")){sb.hidden=false;sb.onclick=function(){if(bgm.paused){bgm.play();sb.textContent="🔊"}else{bgm.pause();sb.textContent="🔇"}}}
  var btns=document.querySelectorAll(".nav button");
  
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
      var id=e.target.id;}})},{threshold:.55});
    document.querySelectorAll("section").forEach(function(s){io.observe(s)});
  }

  /* ===== រូបភាព / KHQR / សារជូនពរ / ប្រតិទិន ===== */
  function qs(a){$("qk").classList.toggle("on",a);$("qu").classList.toggle("on",!a);$("qrk").classList.toggle("on",a);$("qru").classList.toggle("on",!a)}
  $("qk").onclick=function(){qs(true)};$("qu").onclick=function(){qs(false)};
  var VN="ភូមិពោធិ៍អណ្ដោត ឃុំជើងភ្នំ ស្រុកបាភ្នំ ខេត្តព្រៃវែង";
  $("gmap").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(VN);
  (function(){var box=document.querySelector(".rmap");if(!box)return;var f=document.createElement("iframe");f.title="Google Map";f.loading="lazy";f.referrerPolicy="no-referrer-when-downgrade";f.allowFullscreen=true;f.src="https://www.google.com/maps?q="+encodeURIComponent(VN)+"&hl=km&z=14&output=embed";box.appendChild(f);
    /* បើ browser រារាំងផែនទី (CSP/កម្មវិធីក្នុង) → លាក់ iframe ហើយចុចលើប្រអប់បើក Google Maps */
    document.addEventListener("securitypolicyviolation",function(e){if(/frame|child/.test(e.violatedDirective)){f.style.display="none";box.style.cursor="pointer";box.onclick=function(){window.open($("gmap").href,"_blank","noopener")}}})})();
  (function(){var ymd=EV.y+p2(EV.m)+p2(EV.d),d=ymd+"T"+p2(EV.hh)+p2(EV.mm)+"00",e=ymd+"T"+p2(EV.hh+4)+p2(EV.mm)+"00";
    $("addcal").href="https://calendar.google.com/calendar/render?action=TEMPLATE&text="+encodeURIComponent("សិរីមង្គលអាពាហ៍ពិពាហ៍")+"&dates="+d+"/"+e+"&ctz=Asia/Phnom_Penh&location="+encodeURIComponent(VN)}());
  var W=[];try{W=JSON.parse(localStorage.getItem("w")||"[]")}catch(e){}
  function esc(t){return t.replace(/[&<>]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[c]})}
  function draw(){$("wl").innerHTML=W.map(function(w){return"<div><b>"+esc(w.n)+"</b><br>"+esc(w.t)+"</div>"}).join("")}
  $("ws").onclick=function(){var a=$("wn").value.trim(),b=$("wt").value.trim();if(!a||!b)return;W.unshift({n:a,t:b});try{localStorage.setItem("w",JSON.stringify(W))}catch(e){}$("wn").value=$("wt").value="";draw();var st=$("wst");if(!st){st=document.createElement("div");st.id="wst";st.style.cssText="font-size:13px;margin:6px 0;min-height:1.5em";$("ws").insertAdjacentElement("afterend",st)}var en=document.documentElement.lang==="en";st.textContent=en?"Sending…":"កំពុងផ្ញើ…";var c={};try{c=window.TGCFG||(window.parent&&window.parent.TGCFG)||{}}catch(e){c=window.TGCFG||{}}var fin=function(ok){st.textContent=ok?(en?"✅ Thank you! Your wishes have been sent.":"✅ សូមអរគុណ! សារជូនពររបស់អ្នកត្រូវបានផ្ញើហើយ។"):(en?"⚠ Saved on this device, but it could not be sent to the hosts.":"⚠ បានរក្សាទុកក្នុងឧបករណ៍នេះ ប៉ុន្តែមិនអាចផ្ញើទៅម្ចាស់កម្មវិធីបានទេ។")};if(!c.relay){fin(false);return}try{fetch(c.relay,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({name:a,text:b,guest:(new URLSearchParams(location.search).get("to")||"").trim().slice(0,80),id:"w"+Date.now()+Math.random().toString(36).slice(2,6),type:"wish"})}).then(function(){fin(true)}).catch(function(){fin(false)})}catch(e){fin(false)}};draw();
  apply();setInterval(tick,1000);
})();

// ═══════ [2] <script> · (function(){ ═══════

(function(){
  if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  var box=document.getElementById("petals"),N=22;
  var pal=[["#ff9db3","#e0345f","#9e1239"],["#ffd0dc","#f585a6","#c93a68"],["#fff0f3","#fbb8c9","#e07a98"],["#ff7a8f","#c8173f","#7d0b2b"]];
  function svg(c){return "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 50'><defs><radialGradient id='g' cx='35%' cy='30%' r='80%'><stop offset='0' stop-color='"+c[0]+"'/><stop offset='.55' stop-color='"+c[1]+"'/><stop offset='1' stop-color='"+c[2]+"'/></radialGradient></defs><path d='M20 8C24 2 33 3 36 12C39 24 31 42 20 49C9 42 1 24 4 12C7 3 16 2 20 8Z' fill='url(#g)'/><path d='M20 10V46M20 20C14 24 10 28 8 34M20 20C26 24 30 28 32 34' stroke='"+c[2]+"' stroke-opacity='.35' stroke-width='.7' fill='none'/><path d='M9 12C12 6 18 5 20 9C17 9 12 12 11 18Z' fill='#fff' fill-opacity='.38'/></svg>"}
  var imgs=pal.map(function(c){return 'url("data:image/svg+xml,'+encodeURIComponent(svg(c))+'")'});
  for(var i=0;i<N;i++){
    var e=document.createElement("i"),s=5+Math.random()*6;
    e.className="pet"+(s<7.5?" far":"");
    e.style.backgroundImage=imgs[Math.floor(Math.random()*imgs.length)];
    e.style.cssText+=";--x:"+(Math.random()*100).toFixed(1)+"%;--s:"+s.toFixed(1)+"px;--d:"+(9+Math.random()*8).toFixed(1)+"s;--dl:-"+(Math.random()*16).toFixed(1)+"s;--w:"+(20+Math.random()*50).toFixed(0)+"px";
    box.appendChild(e);
  }
})();

// ═══════ [3] <script> · (function(){ ═══════

(function(){
  var vs=document.querySelectorAll(".vgal video");if(!vs.length)return;
  vs.forEach(function(v){
    v.addEventListener("play",function(){vs.forEach(function(o){if(o!==v)o.pause()});var b=document.getElementById("bgm");if(b&&!b.paused)b.pause()});
  });
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting&&!e.target.paused)e.target.pause()})},{threshold:.2});
    vs.forEach(function(v){io.observe(v)});
  }
})();

// ═══════ [4] <script> · (function(){ ═══════

(function(){
  var nav=document.querySelector(".nav"),t;
  function show(){if(document.body.classList.contains("intro"))return;nav.classList.add("show");clearTimeout(t);t=setTimeout(function(){nav.classList.remove("show")},3000)}
  ["scroll","touchmove","wheel"].forEach(function(e){addEventListener(e,show,{passive:true})});
  nav.addEventListener("pointerdown",show);
})();

// ═══════ [5] <script> · (function(){ ═══════

(function(){
  if(matchMedia("(prefers-reduced-motion:reduce)").matches||!("IntersectionObserver" in window))return;
  function go(){
    document.documentElement.classList.add("js-rv");
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
    document.querySelectorAll("#s4>*,#s5>*:not(.rhero),#s6>*,#s7>*,#s8>*,#s9>*").forEach(function(el){el.classList.add("rv");io.observe(el)});
  }
  if(!document.body.classList.contains("intro"))return go();
  var mo=new MutationObserver(function(){if(!document.body.classList.contains("intro")){mo.disconnect();go()}});
  mo.observe(document.body,{attributes:true,attributeFilter:["class"]});
})();

// ═══════ [6] <script> · (function(){ ═══════

(function(){
  var btns=[].slice.call(document.querySelectorAll(".nav button")),tk=false,busy=false,raf=0;
  function upd(){
    tk=false;if(busy||document.body.classList.contains("intro"))return;
    var line=innerHeight*.4,cur=btns[0],bottom=innerHeight+scrollY>=document.documentElement.scrollHeight-4;
    btns.forEach(function(b){var t=document.getElementById(b.dataset.go);if(t&&t.getBoundingClientRect().top<=line)cur=b});
    if(bottom)cur=btns[btns.length-1];
    btns.forEach(function(b){b.classList.toggle("a",b===cur)});
  }
  function req(){if(!tk){tk=true;requestAnimationFrame(upd)}}
  addEventListener("scroll",req,{passive:true});addEventListener("resize",req);
  function stop(){if(raf){cancelAnimationFrame(raf);raf=0}busy=false}
  ["wheel","touchstart","keydown"].forEach(function(e){addEventListener(e,function(){if(busy){stop();upd()}},{passive:true})});
  function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
  function goTo(b){
    var t=document.getElementById(b.dataset.go);if(!t)return;
    btns.forEach(function(x){x.classList.toggle("a",x===b)});
    var max=document.documentElement.scrollHeight-innerHeight,
        off=parseFloat(getComputedStyle(t).scrollMarginTop)||0,
        to=Math.max(0,Math.min(max,t.getBoundingClientRect().top+scrollY-off)),from=scrollY,d=to-from;
    stop();if(Math.abs(d)<2)return;
    if(matchMedia("(prefers-reduced-motion:reduce)").matches){scrollTo(0,to);upd();return}
    var dur=Math.min(900,380+Math.abs(d)*.18),t0=performance.now();busy=true;
    (function step(n){var k=Math.min(1,(n-t0)/dur);scrollTo(0,from+d*ease(k));
      if(k<1&&busy)raf=requestAnimationFrame(step);else{raf=0;busy=false;upd()}})(t0);
  }
  btns.forEach(function(b){b.addEventListener("click",function(){goTo(b)})});
  upd();
})();

// ═══════ [7] <script> · (function(){ ═══════

(function(){
  var a=document.getElementById("bgm"),b=document.getElementById("bgmBtn");
  if(!a||!a.getAttribute("src"))return;
  var off=false,ev=["pointerdown","touchend","keydown"];
  function sync(){if(b)b.textContent=a.paused?"🔇":"🔊"}
  a.addEventListener("play",sync);a.addEventListener("pause",sync);
  function once(){ev.forEach(function(e){removeEventListener(e,once,true)});if(a.paused&&!off)a.play().catch(function(){})}
  window.startBgm=function(){if(off)return;a.volume=.7;a.play().catch(function(){ev.forEach(function(e){addEventListener(e,once,true)})})};
  if(b)b.addEventListener("click",function(){off=a.paused});
})();

// ═══════ [8] <script> · /* ចុះបន្ទាត់តាម <br> ឱ្យត្រឹមតែ ៣ បន្ទាត់ / ២ ប ═══════

/* ចុះបន្ទាត់តាម <br> ឱ្យត្រឹមតែ ៣ បន្ទាត់ / ២ បន្ទាត់ ៖ បង្រួមទំហំអក្សរឱ្យល្មមទទឹងអេក្រង់ */
(function(){
  function fit(){
    var en=document.documentElement.lang==="en";
    document.querySelectorAll(".fit").forEach(function(e){
      e.style.removeProperty("font-size");
      if(en)return;
      e.classList.remove("fitwrap");
      var w=e.clientWidth,sw=e.scrollWidth;
      if(w&&sw>w){var fs=parseFloat(getComputedStyle(e).fontSize),nf=fs*w/sw*0.97;
        if(nf>=5)e.style.setProperty("font-size",nf.toFixed(2)+"px","important");
        else{e.classList.add("fitwrap")} /* តូចពេកមិនអាចអានបាន → ទុកឱ្យវាសរសេរបន្តបន្ទាត់ក្នុងប្លុកនីមួយៗ */
      }
    });
  }
  var t;function later(){clearTimeout(t);t=setTimeout(fit,30)}
  window.addEventListener("load",fit);window.addEventListener("resize",later);window.addEventListener("orientationchange",later);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
  document.querySelectorAll(".fit").forEach(function(e){new MutationObserver(later).observe(e,{childList:true})});
  new MutationObserver(later).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
  fit();
})();

// ═══════ [9] <script> · (function(){ ═══════

(function(){
  var g=document.getElementById("gal"),lb=document.getElementById("lb");if(!g||!lb)return;
  var ph=[].slice.call(g.children),img=lb.querySelector("img"),c=lb.querySelector(".lbc"),cur=0,x0=null;
  function url(e){var m=/url\(["']?([^"')]+)["']?\)/.exec(e.style.backgroundImage);return m?m[1]:""}
  function show(i){cur=(i+ph.length)%ph.length;img.src=url(ph[cur]);c.textContent=(cur+1)+" / "+ph.length}
  function open(i){show(i);lb.hidden=false;document.documentElement.classList.add("lbo");lb.querySelector(".lbx").focus()}
  function close(){lb.hidden=true;document.documentElement.classList.remove("lbo");img.removeAttribute("src")}
  ph.forEach(function(e,i){e.addEventListener("click",function(){open(i)});e.addEventListener("keydown",function(ev){if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();open(i)}})});
  lb.querySelector(".lbx").onclick=close;lb.querySelector(".lbp").onclick=function(){show(cur-1)};lb.querySelector(".lbn").onclick=function(){show(cur+1)};
  lb.addEventListener("click",function(ev){if(ev.target===lb)close()});
  addEventListener("keydown",function(ev){if(lb.hidden)return;if(ev.key==="Escape")close();else if(ev.key==="ArrowLeft")show(cur-1);else if(ev.key==="ArrowRight")show(cur+1)});
  lb.addEventListener("touchstart",function(ev){x0=ev.touches[0].clientX},{passive:true});
  lb.addEventListener("touchend",function(ev){if(x0===null)return;var dx=ev.changedTouches[0].clientX-x0;x0=null;if(Math.abs(dx)>50)show(cur+(dx<0?1:-1))},{passive:true});
})();
