// ═══════ [1] <script> · /* ===== កែព័ត៌មាននៅទីនេះ / EDIT HERE =====  ═══════

/* ===== កែព័ត៌មាននៅទីនេះ / EDIT HERE ===== */
var C={groom:"ភួងស៊ីថា រ៉ាភី",bride:"ផុន ច័ន្ទសុវណ្ណរី",f1:"ភួង ផាត",m1:"ឡេង សុជាតិ",f2:"អ៊ីវ គង់",m2:"គិត ម៉ារ៉ា",
guest:"ភ្ញៀវកិត្តិយស",date:"2027-01-02T17:00:00",lunar:"ថ្ងៃសៅរ៍ ៩រោច ខែបុស្ស ឆ្នាំមមី អដ្ឋស័ក ព.ស.២៥៧០",time:"វេលាម៉ោង ៥:០០ ល្ងាច",venue:"ភូមិពោធិ៍អណ្ដោត ឃុំជើងភ្នំ ស្រុកបាភ្នំ ខេត្តព្រៃវែង",photos:14,
/* ទីតាំងផែនទី៖ ដាក់កូអរដោណេ (ឧ. 11.0123,105.4567) ឬឈ្មោះកន្លែងពិតប្រាកដ ដើម្បីឱ្យម្ជុលចំ។ បើទុកទទេ នឹងប្រើអាសយដ្ឋានខាងលើ */
mapq:"11.239676,105.395231"};
var G=["assets/img-1cf4ff77eb.jpg","assets/img-1e60c9b707.jpg","assets/img-4b400575c3.jpg","assets/img-a4af055cb5.jpg","assets/img-cc8d82de6d.jpg","assets/img-00b5ce4f3e.jpg","assets/img-f4105bc549.jpg","assets/img-6db51debc4.jpg","assets/img-46c8800c0b.jpg","assets/img-76428df39b.jpg","assets/img-0a8fafb5ea.jpg","assets/img-cae05e2c92.jpg","assets/img-c4ae14f0b7.jpg","assets/img-28885863e1.jpg"];
var KM="០១២៣៤៥៦៧៨៩",MONTHS=["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"],DAYS=["អា","ច","អ","ព","ព្រ","សុ","ស"];
function kn(n){return String(n).replace(/\d/g,function(d){return KM[d]})}
function $(i){return document.getElementById(i)}
["f1","m1","f2","m2"].forEach(function(k){$(k).textContent=C[k]});
$("groom").textContent=C.groom;$("bride").textContent=C.bride;$("guest").textContent=(function(){try{var n=new URLSearchParams(location.search).get("to");if(n&&n.trim())return n.trim().slice(0,80)}catch(e){}return C.guest})();$("venue").textContent=C.venue;$("gmap").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(C.venue);
var D=new Date(C.date),Y=D.getFullYear(),M=D.getMonth();
$("calt").textContent="ខែ"+MONTHS[M]+" "+kn(Y);
$("datetxt").innerHTML=C.lunar+"<br>ត្រូវនឹងថ្ងៃទី"+kn(D.getDate())+" ខែ"+MONTHS[M]+" ឆ្នាំ"+kn(Y)+"<br>"+C.time;$("cdt").innerHTML="ថ្ងៃ"+["អាទិត្យ","ច័ន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ","សៅរ៍"][D.getDay()]+" ទី"+kn(D.getDate())+" ខែ"+MONTHS[M]+" ឆ្នាំ"+kn(Y)+'<br><span class="cdv">'+String(C.venue).replace(/[&<>]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[c]})+"</span><br>"+C.time;
var h=DAYS.map(function(d){return"<b>"+d+"</b>"}).join(""),first=new Date(Y,M,1).getDay(),n=new Date(Y,M+1,0).getDate(),i;
for(i=0;i<first;i++)h+="<span></span>";
for(i=1;i<=n;i++)h+='<span class="d'+(i===D.getDate()?" on":"")+'">'+kn(i)+"</span>";
$("cal").innerHTML=h;
function tick(){var t=Math.max(0,D-new Date()),s=Math.floor(t/1000);
$("cd").textContent=kn(Math.floor(s/86400));$("ch").textContent=kn(Math.floor(s%86400/3600));$("cm").textContent=kn(Math.floor(s%3600/60));$("cs").textContent=kn(s%60)}
tick();setInterval(tick,1000);
/* cover */
$("open").onclick=function(){$("cover").classList.add("gone");document.body.style.overflow="";var a=$("bgm"),m=$("mus");m.classList.add("show");try{var p=a.play();if(p&&p.then)p.then(function(){m.classList.add("on")}).catch(function(){m.classList.add("off")})}catch(e){m.classList.add("off")}};
$("mus").onclick=function(){var a=$("bgm"),m=this;if(a.paused){a.play().then(function(){m.classList.add("on");m.classList.remove("off")}).catch(function(){})}else{a.pause();m.classList.remove("on");m.classList.add("off")}};
document.body.style.overflow="hidden";
$("lang").onclick=function(){this.textContent=this.textContent.indexOf("ខ្មែរ")>-1?"🌐 EN":"🌐 ខ្មែរ"};
/* gallery */
var gal=$("gal"),cur=0;
for(i=0;i<C.photos;i++){var s=document.createElement("div");s.className="s"+(i?"":" on");s.style.backgroundImage="url("+G[i]+")";gal.appendChild(s)}
var sl=gal.querySelectorAll(".s");
function show(k){cur=(k+sl.length)%sl.length;sl.forEach(function(e,j){e.classList.toggle("on",j===cur)});$("gc").textContent=kn(cur+1)+" / "+kn(sl.length)}
$("gp").onclick=function(){show(cur-1)};$("gn").onclick=function(){show(cur+1)};show(0);setInterval(function(){show(cur+1)},4500);
/* wishes */
var W=[];try{W=JSON.parse(localStorage.getItem("w")||"[]")}catch(e){}
function esc(t){return t.replace(/[&<>]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[c]})}
function draw(){$("wl").innerHTML=W.map(function(w){return"<div><b>"+esc(w.n)+"</b><br>"+esc(w.t)+"</div>"}).join("")}
function tgc(){try{return window.TGCFG||(window.parent&&window.parent.TGCFG)||{}}catch(e){return window.TGCFG||{}}}
function tg(n,t){var c=tgc();try{
if(c.relay)return fetch(c.relay,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({name:n,text:t,guest:(new URLSearchParams(location.search).get("to")||"").trim().slice(0,80),id:"w"+Date.now()+Math.random().toString(36).slice(2,6),type:"wish"})}).then(function(){return true}).catch(function(){return false})
}catch(e){}return Promise.resolve(false)}
var wst=document.createElement("div");wst.id="wst";wst.style.cssText="font-size:13px;margin:6px 0;min-height:1.5em";$("ws").insertAdjacentElement("afterend",wst);
function isEn(){return document.documentElement.lang==="en"}
$("ws").onclick=function(){var n=$("wn").value.trim(),t=$("wt").value.trim();
if(!n||!t){wst.textContent=isEn()?"Please enter your name and your wishes.":"សូមបំពេញឈ្មោះ និងពាក្យជូនពរ។";return}
W.unshift({n:n,t:t});try{localStorage.setItem("w",JSON.stringify(W))}catch(e){}$("wn").value=$("wt").value="";draw();
wst.textContent=isEn()?"Sending…":"កំពុងផ្ញើ…";
tg(n,t).then(function(ok){wst.textContent=ok?(isEn()?"✅ Thank you! Your wishes have been sent.":"✅ សូមអរគុណ! សារជូនពររបស់អ្នកត្រូវបានផ្ញើហើយ។"):(isEn()?"⚠ Saved on this device, but it could not be sent to the hosts.":"⚠ បានរក្សាទុកក្នុងឧបករណ៍នេះ ប៉ុន្តែមិនអាចផ្ញើទៅម្ចាស់កម្មវិធីបានទេ។")})};draw();
/* calendar */
(function(){var d=C.date.replace(/[-:]/g,"").slice(0,15),en=d.slice(0,9)+p(Math.min(23,+d.slice(9,11)+4))+d.slice(11);function p(n){return(n<10?"0":"")+n}
$("addcal").href="https://calendar.google.com/calendar/render?action=TEMPLATE&text="+encodeURIComponent("សិរីមង្គលអាពាហ៍ពិពាហ៍ "+C.groom+" & "+C.bride)+"&dates="+d+"/"+en+"&ctz=Asia/Phnom_Penh&location="+encodeURIComponent(C.venue)+"&details="+encodeURIComponent(C.lunar)}());
/* external links: open in a new tab, fall back to the same tab if pop-ups are blocked */
function goLink(e){var l=e.currentTarget,u=l.href;if(!u)return;e.preventDefault();var w=null;try{w=window.open(u,"_blank")}catch(x){}if(w){try{w.opener=null}catch(x){}}else{try{location.href=u}catch(x){}}}
$("addcal").addEventListener("click",goLink);$("gmap").addEventListener("click",goLink);
/* khqr */
function qs(a){$("qk").classList.toggle("on",a);$("qu").classList.toggle("on",!a);$("qrk").classList.toggle("on",a);$("qru").classList.toggle("on",!a)}
$("qk").onclick=function(){qs(true)};$("qu").onclick=function(){qs(false)};
/* reveal + nav */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("in")})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
var links=document.querySelectorAll("nav a"),sec=["home","date","place","agenda","photos","videos","wish"].map($);
links.forEach(function(a,j){a.addEventListener("click",function(ev){ev.preventDefault();var t=sec[j];if(t)t.scrollIntoView({behavior:"smooth",block:"start"})})});
addEventListener("scroll",function(){var k=0;sec.forEach(function(e,j){if(e.getBoundingClientRect().top<innerHeight*.5)k=j});links.forEach(function(a,j){a.classList.toggle("on",j===k)})},{passive:true});

// ═══════ [2] <script> · /* រូបតំណាងតាមពាក្យក្នុងកម្មវិធី (ដំណើរការឡើងវិញ ═══════

/* រូបតំណាងតាមពាក្យក្នុងកម្មវិធី (ដំណើរការឡើងវិញដោយស្វ័យប្រវត្តិពេលកែអត្ថបទ) + ផ្ទាំងថ្ងៃទី១/ថ្ងៃទី២ */
(function(){var sc=document.getElementById("agenda");if(!sc)return;var ds=sc.querySelectorAll(".day");if(!ds.length)return;
var P={temple:'<path d="M12 3v3M9.5 8h5l-1 3h-3zM7 11h10l-1.5 3h-7zM5 14h14l-1 3H6zM4 20h16"/>',
buddha:'<circle cx="12" cy="7" r="2.6"/><path d="M7 20c0-4 2-6.5 5-6.5s5 2.5 5 6.5zM8.5 17h7M4.5 20h15"/>',
khan:'<path d="M12 3.5c-2 2-2 5 0 7 2-2 2-5 0-7zM7 8c2 0 4 2 4 4-2 0-4-2-4-4zM17 8c-2 0-4 2-4 4 2 0 4-2 4-4zM6 14h12l-1.5 5.5h-9z"/>',
arch:'<path d="M5 20.5V11c0-4.2 3-7.5 7-7.5s7 3.3 7 7.5v9.5M9 20.5V12c0-2 1.3-3.5 3-3.5s3 1.5 3 3.5v8.5M3.5 20.5h17"/>',
scissors:'<circle cx="7" cy="17" r="2.3"/><circle cx="17" cy="17" r="2.3"/><path d="M8.6 15.2 17.5 3.5M15.4 15.2 6.5 3.5"/>',
plate:'<circle cx="13" cy="12" r="5.5"/><circle cx="13" cy="12" r="2.6"/><path d="M4 4v5.5c0 1.2 1 2 2 2V20M6 4v5.5M21 4c-2 1.5-2.5 5-2.5 8H21v8"/>',
toast:'<path d="M5.5 4h5.5l-.6 5c-.2 2-1.1 3-2.2 3s-2-1-2.2-3zM8.2 12v7M5.8 19.5h4.8M13 4h5.5l-.6 5c-.2 2-1.1 3-2.2 3s-2-1-2.2-3zM15.7 12v7M13.3 19.5h4.8"/>',
ring:'<circle cx="9" cy="14.5" r="4.5"/><circle cx="15" cy="14.5" r="4.5"/><path d="M12 3.5l1.3 2.2-1.3 2.2-1.3-2.2z"/>',
fruit:'<path d="M4.5 11h15l-1.6 8.5H6.1zM8 11c0-3 1.6-5 4-5s4 2 4 5M12 6V3"/>',
lotus:'<path d="M12 4.5c-2.2 3-2.2 7 0 10 2.2-3 2.2-7 0-10zM6 9c3 0 5.5 3 6 6-3 0-6-3-6-6zM18 9c-3 0-5.5 3-6 6 3 0 6-3 6-6zM5 19.5h14"/>'};
var R=[[/ក្រុងពាលី|peali/i,"temple"],[/បរិត្ត|សូត្រមន្ត|chanting/i,"buddha"],[/ជួបជុំ|ជុំពេលា|ខាន់ស្លា|gather|chum pel|khan sla/i,"khan"],
[/ហែជំនូន|ចូលរោង|procession/i,"arch"],[/កាត់សក់|បង្កក់សិរី|hair/i,"scissors"],[/សំពះ|ផ្ទឹម|ចងដៃ|sampeah/i,"ring"],
[/និយាយជើងការ|សែនព្រេន|ផ្លែឈើ|fruit|negotiation/i,"fruit"],[/អាហារ|lunch|dinner|breakfast/i,"plate"],[/ភ្ញៀវ|បដិសណ្ឋារ|ភោជនា|reception/i,"toast"]];
var css="";for(var k in P)css+='#agenda .ag li[data-ic="'+k+'"]{--ic:url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#efca7c" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">'+P[k]+'</svg>')+'")}';
var st=document.createElement("style");st.textContent=css+'#agenda .ag li:not([data-ic])::before{--ic:none}';document.head.appendChild(st);
sc.querySelectorAll(".ag li").forEach(function(li){var t=li.textContent,k="lotus";for(var i=0;i<R.length;i++)if(R[i][0].test(t)){k=R[i][1];break}li.setAttribute("data-ic",k)});
var pn=document.createElement("div");pn.className="agp js";var tb=document.createElement("div");tb.className="agtabs";ds[0].parentNode.insertBefore(pn,ds[0]);pn.appendChild(tb);
var bt=[];Array.prototype.forEach.call(ds,function(d,i){pn.appendChild(d);var b=document.createElement("button");b.type="button";b.onclick=function(){go(i)};tb.appendChild(b);bt.push(b)});
function lab(){var en=document.documentElement.lang==="en";bt.forEach(function(b,i){b.textContent=en?"Day "+(i+1):"ថ្ងៃទី"+"១២៣៤៥៦៧៨៩".charAt(i)})}
function go(k){Array.prototype.forEach.call(ds,function(d,i){d.classList.toggle("agon",i===k);bt[i].classList.toggle("on",i===k)})}
lab();go(0);var lg=document.getElementById("lang");if(lg)lg.addEventListener("click",function(){setTimeout(lab,0)});addEventListener("load",lab);
})();

// ═══════ [3] <script> · (function(){var D=new Date(C.date),W=["អាទិត្យ", ═══════

(function(){var D=new Date(C.date),W=["អាទិត្យ","ច័ន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ","សៅរ៍"],h=D.getHours(),h12=h%12||12,
p=h<12?"ព្រឹក":h===12?"ថ្ងៃត្រង់":h<17?"រសៀល":h<20?"ល្ងាច":"យប់",m=("0"+D.getMinutes()).slice(-2),dd=("0"+D.getDate()).slice(-2);
function s(i,t){var e=document.getElementById(i);if(e)e.textContent=t}
s("hdm","ខែ"+MONTHS[D.getMonth()]);s("hdw","ថ្ងៃ"+W[D.getDay()]);s("hdn",kn(dd));s("hdy","ឆ្នាំ"+kn(D.getFullYear()));s("hdtm","ម៉ោង "+kn(("0"+h12).slice(-2)+":"+m)+" "+p)})();

// ═══════ [4] <script> · /* ===== Language toggle (Khmer / English) ===== ═══════

/* ===== Language toggle (Khmer / English) ===== */
(function(){
var E={groom:"Phuong Sitha Raphy",bride:"Phon Chan Sovannry",f1:"Phuong Phat",m1:"Leng Sochet",f2:"Iv Kong",m2:"Kit Mara"};
var T=[],LANG="km";
function reg(sel,en){var els=document.querySelectorAll(sel);T.push({els:els,kh:Array.prototype.map.call(els,function(e){return e.innerHTML}),en:en})}
function perLi(a){return a.map(function(x){return"<b>"+x[0]+"</b><span>"+x[1]+"</span>"})}
reg(".cv h1",["Wedding Ceremony"]);
reg(".pls",["You Are Cordially Invited"]);
reg("#guest",[$("guest").innerHTML==="ភ្ញៀវកិត្តិយស"?"Honored Guest":$("guest").innerHTML]);
reg("#open",["Tap to open the invitation"]);
reg("#home h2",["The Wedding Ceremony"]);
reg("#home .par div",["Mr. <b>"+E.f1+"</b><br>Mrs. <b>"+E.m1+"</b>","Mr. <b>"+E.f2+"</b><br>Mrs. <b>"+E.m2+"</b>"]);
reg("#home .inv",["We have the honor to invite"]);
reg("#home > p[style]",["Excellencies, Oknha, Lok Chumteav, Sirs, Madams and Misses, to join us as guests of honor and to bestow blessings of prosperity and joy upon the newlyweds at their wedding ceremony."]);
reg(".nm.a small",["Bride"]);reg(".nm.b small",["Groom"]);
reg("#bride",[E.bride]);reg("#groom",[E.groom]);
reg("#date h2",["You Are Invited"]);
reg("#date > p:first-of-type",["to honor our wedding ceremony"]);
reg("#datetxt",["Saturday, January 2, 2027<br>5:00 PM<br>Khmer lunar calendar: Saturday, 9th waning day of Pous, Year of the Horse (Atthasak), B.E. 2570"]);
reg(".hero .ov h2",["Countdown to the Big Day"]);
reg(".cd span",["Days","Hours","Mins","Secs"]);
reg("#addcal",["📅 Add to your calendar"]);
reg("#place h2",["Venue"]);
reg("#venue",["Phum Pho Anhdaot, Commune Cheung Phnum, Ba Phnum District, Prey Veng Province"]);
reg("#cdt",[(function(){var d=new Date(C.date),H=d.getHours(),v=T.filter(function(t){return t.els[0]&&t.els[0].id==="venue"})[0];v=v?v.en[0]:C.venue;return d.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})+'<br><span class="cdv">'+String(v).replace(/[&<>]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[c]})+"</span><br>"+(H%12||12)+":"+("0"+d.getMinutes()).slice(-2)+(H<12?" AM":" PM")})()]);reg("#gmap",["View on Google Maps"]);
(function(){var D=new Date(C.date),H=D.getHours(),L=function(o){return D.toLocaleDateString("en-US",o)};
reg("#hdm",[L({month:"long"})]);reg("#hdw",[L({weekday:"long"})]);reg("#hdn",[String(D.getDate())]);reg("#hdy",[String(D.getFullYear())]);
reg("#hdtm",[(H%12||12)+":"+("0"+D.getMinutes()).slice(-2)+(H<12?" AM":" PM")])})();
reg("#agenda h2",["Program"]);
reg(".day .dh",["Day 1","Day 2"]);
reg(".day .dd",["Friday, January 1, 2027","Saturday, January 2, 2027"]);
reg(".ag li",perLi([
["3:00 PM","Sen Krong Peali ceremony"],
["4:00 PM","Buddhist chanting and blessing ceremony"],
["5:00 PM","Chum Pel ceremony and Khan Sla ceremony"],
["6:00 PM","Dinner"],
["6:30 AM","Family and friends gather to prepare the wedding procession"],
["7:00 AM","Wedding procession enters the wedding hall"],
["7:30 AM","Ceremonial negotiation, offerings, fruit-arranging songs and breakfast"],
["8:30 AM","Hair-cutting ceremony"],
["9:30 AM","Sampeah Phtem: hand-tying, candle circling and scarf ceremony"],
["12:00 PM","Lunch"],
["5:00 PM","Reception for honored guests"]]));
reg("#photos h2",["Gallery"]);
reg("#videos h2",["Video Gallery"]);
reg("#wish h2",["Well Wishes"]);
reg("#thanks h2",["Thank You and Our Apologies"]);
reg(".thx",["We sincerely thank you for your presence and for bestowing your blessings at our wedding ceremony. We apologize that we were unable to invite each of you in person."]);
reg(".khqrh",["Send a gift via: <span>KHQR</span>"]);
reg("#qk",["Riel"]);reg("#qu",["USD"]);
reg("#ws",["Send your wishes"]);
var PH=[["wn","ឈ្មោះរបស់អ្នក","Your name"],["wt","សរសេរពាក្យជូនពរ...","Write your wishes…"]];
var MEN=["January","February","March","April","May","June","July","August","September","October","November","December"],DEN=["Su","Mo","Tu","We","Th","Fr","Sa"];
var _kn=kn;kn=function(n){return LANG==="en"?String(n):_kn(n)};
function renderCal(){
 var en=LANG==="en",h=(en?DEN:DAYS).map(function(d){return"<b>"+d+"</b>"}).join(""),i;
 for(i=0;i<first;i++)h+="<span></span>";
 for(i=1;i<=n;i++)h+='<span class="d'+(i===D.getDate()?" on":"")+'">'+kn(i)+"</span>";
 $("cal").innerHTML=h;
 $("calt").textContent=en?MEN[M]+" "+Y:"ខែ"+MONTHS[M]+" "+kn(Y);
}
function apply(l){
 LANG=l;var en=l==="en";
 document.documentElement.lang=en?"en":"km";
 document.body.classList.toggle("en",en);
 document.title=en?"The Wedding Ceremony":"សិរីមង្គលអាពាហ៍ពិពាហ៍";
 T.forEach(function(t){Array.prototype.forEach.call(t.els,function(e,i){
  if(en){var v=t.en.length===1&&t.els.length>1?t.en[0]:t.en[i];if(v!=null)e.innerHTML=v}else e.innerHTML=t.kh[i]})});
 PH.forEach(function(p){$(p[0]).placeholder=en?p[2]:p[1]});
 $("lang").textContent=en?"🌐 EN":"🌐 ខ្មែរ";
 renderCal();tick();show(cur);
 try{localStorage.setItem("lang",l)}catch(e){}
}
$("lang").onclick=function(){apply(LANG==="km"?"en":"km")};
var s=null;try{s=localStorage.getItem("lang")}catch(e){}
if(s==="en")apply("en");
})();

// ═══════ [5] <script> · (function(){ ═══════

(function(){
var g=$("gal"),S=g.querySelectorAll(".s"),N=S.length;
show=function(k){cur=(k+N)%N;
 S.forEach(function(e,j){var d=((j-cur)%N+N)%N;if(d>N/2)d-=N;e.className="s "+(d===0?"c":d===-1?"l":d===1?"r":"h")});
 $("gc").textContent=kn(cur+1)+" / "+kn(N)};
S.forEach(function(e,j){e.onclick=function(){if(j!==cur)show(j)}});
var x0=null;
g.addEventListener("touchstart",function(e){x0=e.touches[0].clientX},{passive:true});
g.addEventListener("touchend",function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(dx)>40)show(cur+(dx<0?1:-1))},{passive:true});
show(cur);
var ph=$("photos");
for(var i=0;i<9;i++){var p=document.createElement("span");p.className="pt";p.style.left=(5+i*11)+"%";p.style.animationDuration=(9+(i*7)%6)+"s";p.style.animationDelay=(-(i*13)%9)+"s";p.style.transform="scale("+(.7+(i%3)*.25)+")";ph.appendChild(p)}
})();

// ═══════ [6] <script> · (function(){ ═══════

(function(){
var c=document.createElement("div");c.id="petals";document.body.appendChild(c);
var cols=["#fff0f3,#f6bcc8","#ffe4ea,#f2a9ba","#fff6f0,#f7cdb8","#ffeef2,#eaa0b6"];
for(var i=0;i<18;i++){var p=document.createElement("span"),s=.6+((i*37)%10)/10*.9;
 p.style.cssText="left:"+((i*53)%100)+"%;width:"+(9*s)+"px;height:"+(13*s)+"px;animation-duration:"+(9+(i*5)%8)+"s;animation-delay:"+(-(i*7)%12)+"s;--dx:"+((i%2?1:-1)*(20+(i*11)%50))+"px;background:radial-gradient(circle at 30% 30%,"+cols[i%4]+")";
 c.appendChild(p)}
$("open").addEventListener("click",function(){c.classList.add("on")});
})();

// ═══════ [7] <script> · (function(){ ═══════

(function(){
var S=document.querySelectorAll("#gal .s"),N=S.length,li=0,lb=$("lb"),im=$("lbi"),x0=null;
/* ទីតាំងមុខគូស្វាមីភរិយាក្នុងស៊ុមរូប (ដើម្បីកុំឱ្យកាត់មុខ) */
var GP={2:"29% 50%",3:"45% 50%",1:"47% 50%",12:"47% 50%",13:"57% 50%",10:"61% 50%"};
for(var k in GP)if(S[k])S[k].style.backgroundPosition=GP[k];
function paint(){im.style.opacity=0;setTimeout(function(){im.src=G[li];im.style.opacity=1},120);$("lbt").textContent=kn(li+1)+" / "+kn(N)}
function open(j){li=j;im.src=G[li];$("lbt").textContent=kn(li+1)+" / "+kn(N);lb.classList.add("on");lb.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function close(){lb.classList.remove("on");lb.setAttribute("aria-hidden","true");document.body.style.overflow="";show(li)}
function go(d){li=(li+d+N)%N;paint()}
S.forEach(function(e,j){e.onclick=function(){if(j===cur)open(j);else show(j)}});
$("lbc").onclick=close;$("lbp").onclick=function(e){e.stopPropagation();go(-1)};$("lbn").onclick=function(e){e.stopPropagation();go(1)};
lb.addEventListener("click",function(e){if(e.target===lb)close()});
lb.addEventListener("touchstart",function(e){x0=e.touches[0].clientX},{passive:true});
lb.addEventListener("touchend",function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(dx)>50)go(dx<0?1:-1)},{passive:true});
addEventListener("keydown",function(e){if(!lb.classList.contains("on"))return;if(e.key==="Escape")close();else if(e.key==="ArrowRight")go(1);else if(e.key==="ArrowLeft")go(-1)});
})();

// ═══════ [8] <script> · (function(){ ═══════

(function(){
var mp=document.querySelector(".map"),fr=$("mapf");
function noMap(){fr.style.display="none";mp.classList.add("nomap");mp.onclick=function(){window.open($("gmap").href,"_blank","noopener")}}
/* បើទំព័រនេះបើកក្នុងកន្លែងដែលហាមដាក់ផែនទី (CSP) នឹងបង្ហាញប៊ូតុងជំនួស */
document.addEventListener("securitypolicyviolation",function(e){if(/frame|child/.test(e.violatedDirective))noMap()});
function setMap(){var q=(C.mapq&&C.mapq.trim())||C.venue,en=document.documentElement.lang==="en";
$("mfbt").textContent=en?"Tap the button below to open the map":"ចុចប៊ូតុងខាងក្រោម ដើម្បីបើកផែនទី";
fr.src="https://www.google.com/maps?q="+encodeURIComponent(q)+"&z=17&hl="+(en?"en":"km")+"&output=embed";
$("gmap").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q)}
setMap();$("lang").addEventListener("click",function(){setTimeout(setMap,50)});
})();

// ═══════ [9] <script> · (function(){ ═══════

(function(){
var box=$("vbox"),v=$("vid"),tried=0,failed=false,bgWas=false;
function b64(){return $("vdata").textContent.trim()}
function isUrl(){return /^[\w\-\/.]+\.(mp4|webm|mov)(\?.*)?$/i.test(b64())}
function blobUrl(){if(isUrl())return b64();var b=atob(b64()),n=b.length,u=new Uint8Array(n);for(var i=0;i<n;i++)u[i]=b.charCodeAt(i);return URL.createObjectURL(new Blob([u],{type:"video/mp4"}))}
function dataUrl(){return isUrl()?b64():"data:video/mp4;base64,"+b64()}
function play(){var p=v.play();if(p&&p.catch)p.catch(function(){})}
function fail(){failed=true;box.classList.remove("on");v.controls=false;v.removeAttribute("src");
 $("vbad").textContent=document.documentElement.lang==="en"?"This video cannot play here. Please download the file and open it in Chrome or Safari.":"វីដេអូមិនអាចចាក់ក្នុងកន្លែងនេះបានទេ សូមទាញយកឯកសារ ហើយបើកក្នុង Chrome ឬ Safari។";box.classList.add("bad")}
function retryData(){if(tried>0){fail();return}tried=1;try{v.src=dataUrl();v.load();play()}catch(e){fail()}}
v.addEventListener("error",function(){if(v.getAttribute("src"))retryData()});
document.addEventListener("securitypolicyviolation",function(e){if(/media|default/.test(e.violatedDirective))retryData()});
/* ត្រូវចាក់ភ្លាមៗក្នុងការចុច (ចាំបាច់សម្រាប់ iPhone) ដូច្នេះមិនប្រើ setTimeout ទេ */
function start(){if(failed)return;
 if(!v.getAttribute("src")){try{v.src=blobUrl()}catch(e){retryData();box.classList.add("on");v.controls=true;return}}
 box.classList.add("on");v.controls=true;play()}
$("vplay").onclick=start;
v.addEventListener("click",function(){if(!v.controls)start()});
/* ផ្អាកចម្រៀងផ្ទៃខាងក្រោយ នៅពេលចាក់វីដេអូ ហើយបន្តវិញពេលបញ្ចប់ */
v.addEventListener("play",function(){var a=$("bgm"),m=$("mus");bgWas=!a.paused;if(bgWas){a.pause();m.classList.remove("on");m.classList.add("off")}});
function resume(){var a=$("bgm"),m=$("mus");if(bgWas&&a.paused){a.play().then(function(){m.classList.add("on");m.classList.remove("off")}).catch(function(){})}bgWas=false}
v.addEventListener("pause",function(){if(!v.ended)resume()});v.addEventListener("ended",resume);
new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting&&!v.paused)v.pause()})},{threshold:0}).observe(box);
})();

// ═══════ [10] <script> · (function(){var n=document.getElementById("nav") ═══════

(function(){var n=document.getElementById("nav");if(!n)return;n.classList.add("nv");
var t=null,IDLE=10000;
function y(){return window.pageYOffset||document.documentElement.scrollTop||0}
function hide(){n.classList.add("nv")}
function u(){if(y()<90){clearTimeout(t);hide();return}n.classList.remove("nv");clearTimeout(t);t=setTimeout(hide,IDLE)}
function keep(){if(!n.classList.contains("nv")){clearTimeout(t);t=setTimeout(hide,IDLE)}}
addEventListener("scroll",u,{passive:true});addEventListener("resize",u);
n.addEventListener("pointerdown",keep);n.addEventListener("click",keep);u()})();

// ═══════ [11] <script> · /* បើកសំបុត្រ៖ កំណត់ចំណុចចាប់ផ្តើមនៃរង្វង់ពីប៊ូត ═══════

/* បើកសំបុត្រ៖ កំណត់ចំណុចចាប់ផ្តើមនៃរង្វង់ពីប៊ូតុង និងបញ្ចេញពន្លឺ */
(function(){var cv=document.getElementById("cover"),bt=document.getElementById("open");if(!cv||!bt)return;
bt.addEventListener("click",function(){var r=bt.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
cv.style.setProperty("--ox",cx+"px");cv.style.setProperty("--oy",cy+"px");document.body.classList.add("opened");
var f=document.createElement("div");f.className="openfx";f.style.left=cx+"px";f.style.top=cy+"px";document.body.appendChild(f);setTimeout(function(){if(f.parentNode)f.parentNode.removeChild(f)},1400)},true)})();

