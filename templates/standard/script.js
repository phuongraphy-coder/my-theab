// ═══════ [1] <script> · /* ===== កែព័ត៌មាននៅទីនេះ / EDIT HERE =====  ═══════

/* ===== កែព័ត៌មាននៅទីនេះ / EDIT HERE ===== */
var C={gname:"",groom:"ភួងស៊ីថា រ៉ាភី",bride:"ផុន ច័ន្ទសុវណ្ណរី",f1:"ភួង ផាត",m1:"ឡេង សុជាតិ",f2:"អ៊ីវ គង់",m2:"គិត ម៉ារ៉ា",
guest:"ដោយក្តីរីករាយអស់ពីដួងចិត្ត យើងខ្ញុំសូមគោរពអញ្ជើញ លោកអ្នក មកចូលរួមជាសាក្សី និងអបអរសាទរក្តីស្នេហា\u00a0របស់យើង។",date:"2027-01-02T17:00:00",lunar:"ថ្ងៃសៅរ៍ ៩រោច ខែមិគសិរ ឆ្នាំមមី អដ្ឋស័ក ព.ស.២៥៧០",time:"វេលាម៉ោង ៥:០០ ល្ងាច",venue:"ភូមិពោធិ៍អណ្ដោត ឃុំជើងភ្នំ ស្រុកបាភ្នំ ខេត្តព្រៃវែង",photos:6};
var G=["assets/img-d8a36046c5.jpg","assets/img-4b6676ee53.jpg","assets/img-28885863e1.jpg","assets/img-2244840781.jpg","assets/img-3d4a481a9f.jpg","assets/img-6dc6a6d07a.jpg"]; /* រូបកម្រងរូបភាព ៦ សន្លឹក */
var KM="០១២៣៤៥៦៧៨៩",MONTHS=["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"],DAYS=["អា","ច","អ","ព","ព្រ","សុ","ស"];
function kn(n){return String(n).replace(/\d/g,function(d){return KM[d]})}
function $(i){return document.getElementById(i)}
["f1","m1","f2","m2"].forEach(function(k){$(k).textContent=C[k]});
$("groom").textContent=C.groom;$("bride").textContent=C.bride;$("guest").textContent=C.guest;(function(){var n=C.gname||"";try{var q=new URLSearchParams(location.search).get("to");if(q&&q.trim())n=q.trim().slice(0,80)}catch(e){}if(n)$("vipt").textContent=n})();$("venue").textContent=C.venue;$("gmap").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(C.venue);
var D=new Date(C.date),Y=D.getFullYear(),M=D.getMonth();
$("datetxt").innerHTML=C.lunar+"<br>ត្រូវនឹងថ្ងៃទី"+kn(D.getDate())+" ខែ"+MONTHS[M]+" ឆ្នាំ"+kn(Y)+"<br>"+C.time;
var i;
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
for(i=0;i<C.photos;i++){var s=document.createElement("div");s.className="s"+(i?"":" on");if(G[i])s.style.backgroundImage="url("+G[i]+")";else s.setAttribute("data-n",i+1);gal.appendChild(s)}
var sl=gal.querySelectorAll(".s");
function show(k){cur=(k+sl.length)%sl.length;sl.forEach(function(e,j){e.classList.toggle("on",j===cur)});$("gc").textContent=kn(cur+1)+" / "+kn(sl.length)}
$("gp").onclick=function(){show(cur-1)};$("gn").onclick=function(){show(cur+1)};show(0);setInterval(function(){show(cur+1)},4500);
/* wishes */
function tg2(n,t){try{var c=window.TGCFG||(window.parent&&window.parent.TGCFG)||{};if(c.relay)fetch(c.relay,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify({name:n,text:t,guest:(new URLSearchParams(location.search).get("to")||"").trim().slice(0,80),id:"w"+Date.now()+Math.random().toString(36).slice(2,6),type:"wish"})}).catch(function(){})}catch(e){}}
var W=[];try{W=JSON.parse(localStorage.getItem("w")||"[]")}catch(e){}
function esc(t){return t.replace(/[&<>]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[c]})}
function draw(){$("wl").innerHTML=W.map(function(w){return"<div><b>"+esc(w.n)+"</b><br>"+esc(w.t)+"</div>"}).join("")}
$("ws").onclick=function(){var n=$("wn").value.trim(),t=$("wt").value.trim();if(!n||!t)return;W.unshift({n:n,t:t});tg2(n,t);try{localStorage.setItem("w",JSON.stringify(W))}catch(e){}$("wn").value=$("wt").value="";draw()};draw();
/* calendar */
(function(){var d=C.date.replace(/[-:]/g,"").slice(0,15),en=d.slice(0,9)+p(Math.min(23,+d.slice(9,11)+4))+d.slice(11);function p(n){return(n<10?"0":"")+n}
$("addcal").href="https://calendar.google.com/calendar/render?action=TEMPLATE&text="+encodeURIComponent("សិរីមង្គលអាពាហ៍ពិពាហ៍ "+C.groom+" & "+C.bride)+"&dates="+d+"/"+en+"&ctz=Asia/Phnom_Penh&location="+encodeURIComponent(C.venue)+"&details="+encodeURIComponent(C.lunar)}());
/* khqr */
function qs(a){$("qk").classList.toggle("on",a);$("qu").classList.toggle("on",!a);$("qrk").classList.toggle("on",a);$("qru").classList.toggle("on",!a)}
$("qk").onclick=function(){qs(true)};$("qu").onclick=function(){qs(false)};
/* reveal + nav */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("in")})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
var links=document.querySelectorAll("nav a"),sec=["home","date","place","agenda","photos","wish"].map($);
addEventListener("scroll",function(){var k=0;sec.forEach(function(e,j){if(e.getBoundingClientRect().top<innerHeight*.5)k=j});links.forEach(function(a,j){a.classList.toggle("on",j===k)})},{passive:true});

// ═══════ [2] <script> · /* ===== Language toggle (Khmer / English) ===== ═══════

/* ===== Language toggle (Khmer / English) ===== */
(function(){
var E={groom:"Phuong Sitha Raphy",bride:"Phon Chan Sovannry",f1:"Phuong Phat",m1:"Leng Sochet",f2:"Iv Kong",m2:"Kit Mara"};
var T=[],LANG="km";
function reg(sel,en){var els=document.querySelectorAll(sel);T.push({els:els,kh:Array.prototype.map.call(els,function(e){return e.innerHTML}),en:en})}
function perLi(a){return a.map(function(x){return"<b>"+x[0]+"</b><span>"+x[1]+"</span>"})}
reg(".cv h1",["Wedding Ceremony"]);
reg(".pls",["You Are Cordially Invited"]);
reg("#guest",["With hearts full of joy, we warmly invite you to join us as a witness and to celebrate our love."]);
reg("#open",["Tap to open the invitation"]);
reg("#home h2",["The Wedding Ceremony"]);
reg("#home .par div",["Mr. <b>"+E.f1+"</b><br>Mrs. <b>"+E.m1+"</b>","Mr. <b>"+E.f2+"</b><br>Mrs. <b>"+E.m2+"</b>"]);
reg("#home .inv",["We have the honor to invite"]);
reg("#home > p[style]",["Excellencies, Oknha, Lok Chumteav, Sirs, Madams and Misses, to join us as guests of honor and to bestow blessings of prosperity and joy upon the newlyweds at their wedding ceremony."]);
reg(".nm.a small",["Bride"]);reg(".nm.b small",["Groom"]);
reg("#bride",[E.bride]);reg("#groom",[E.groom]);
reg("#date h2",["You Are Invited"]);
reg("#vipt",["Honored Guests"]);
reg("#datetxt",["Saturday, January 2, 2027<br>5:00 PM<br>Khmer lunar calendar: Saturday, 9th waning day of Migasir, Year of the Horse (Atthasak), B.E. 2570"]);
reg(".hero .ov h2",["Countdown to the Big Day"]);
reg(".cd span",["Days","Hours","Mins","Secs"]);
reg("#addcal",["📅 Add to your calendar"]);
reg("#place h2",["Venue"]);
reg("#venue",["Phum Pho Anhdaot, Commune Cheung Phnum, Ba Phnum District, Prey Veng Province"]);
reg("#gmap",["Open in Google Maps"]);
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
reg("#wish h2",["Well Wishes"]);
reg("#thanks h2",["Thank You and Our Apologies"]);
reg(".thx",["We sincerely thank you for your presence and for bestowing your blessings at our wedding ceremony. We apologize that we were unable to invite each of you in person."]);
reg(".khqrh",["Send a gift via: <span>KHQR</span>"]);
reg("#qk",["Riel"]);reg("#qu",["USD"]);
reg("#ws",["Send your wishes"]);
var PH=[["wn","ឈ្មោះរបស់អ្នក","Your name"],["wt","សរសេរពាក្យជូនពរ...","Write your wishes…"]];
var MEN=["January","February","March","April","May","June","July","August","September","October","November","December"],DEN=["Su","Mo","Tu","We","Th","Fr","Sa"];
var _kn=kn;kn=function(n){return LANG==="en"?String(n):_kn(n)};
function apply(l){
 LANG=l;var en=l==="en";
 document.documentElement.lang=en?"en":"km";
 document.body.classList.toggle("en",en);
 document.title=en?"The Wedding Ceremony":"សិរីមង្គលអាពាហ៍ពិពាហ៍";
 T.forEach(function(t){Array.prototype.forEach.call(t.els,function(e,i){
  if(en){var v=t.en.length===1&&t.els.length>1?t.en[0]:t.en[i];if(v!=null)e.innerHTML=v}else e.innerHTML=t.kh[i]})});
 PH.forEach(function(p){$(p[0]).placeholder=en?p[2]:p[1]});
 $("lang").textContent=en?"🌐 EN":"🌐 ខ្មែរ";
 tick();show(cur);
 try{localStorage.setItem("lang",l)}catch(e){}
}
$("lang").onclick=function(){apply(LANG==="km"?"en":"km")};
var s=null;try{s=localStorage.getItem("lang")}catch(e){}
if(s==="en")apply("en");
})();

// ═══════ [3] <script> · (function(){ ═══════

(function(){
var g=$("gal"),S=g.querySelectorAll(".s"),N=S.length;
show=function(k){cur=(k+N)%N;
 S.forEach(function(e,j){var d=((j-cur)%N+N)%N;if(d>N/2)d-=N;e.className="s "+(d===0?"c":d===-1?"l":d===1?"r":"h")});
 $("gc").textContent=kn(cur+1)+" / "+kn(N)};
S.forEach(function(e,j){e.onclick=function(){if(j!==cur)show(j);else if(window.openLB)openLB(j)}});
var x0=null;
g.addEventListener("touchstart",function(e){x0=e.touches[0].clientX},{passive:true});
g.addEventListener("touchend",function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(dx)>40)show(cur+(dx<0?1:-1))},{passive:true});
show(cur);
var ph=$("photos");
for(var i=0;i<9;i++){var p=document.createElement("span");p.className="pt";p.style.left=(5+i*11)+"%";p.style.animationDuration=(9+(i*7)%6)+"s";p.style.animationDelay=(-(i*13)%9)+"s";p.style.transform="scale("+(.7+(i%3)*.25)+")";ph.appendChild(p)}
})();

// ═══════ [4] <script> · (function(){ ═══════

(function(){
var c=document.createElement("div");c.id="petals";document.body.appendChild(c);
var cols=["#f7f4fc,#c9bde0","#efeaf8,#b4a5d4","#f3f7ee,#b7c9a1","#f8f6ef,#d2c99c"];
for(var i=0;i<18;i++){var p=document.createElement("span"),s=.6+((i*37)%10)/10*.9;
 p.style.cssText="left:"+((i*53)%100)+"%;width:"+(9*s)+"px;height:"+(13*s)+"px;animation-duration:"+(9+(i*5)%8)+"s;animation-delay:"+(-(i*7)%12)+"s;--dx:"+((i%2?1:-1)*(20+(i*11)%50))+"px;background:radial-gradient(circle at 30% 30%,"+cols[i%4]+")";
 c.appendChild(p)}
$("open").addEventListener("click",function(){c.classList.add("on")});
})();

// ═══════ [5] <script> · (function(){ ═══════

(function(){
var lb=document.createElement("div");lb.id="lb";
lb.innerHTML='<button class="lbx" aria-label="close">\u00d7</button><button class="lbp" aria-label="prev">\u2039</button><img alt=""><button class="lbn" aria-label="next">\u203a</button><div class="lbc"></div>';
document.body.appendChild(lb);
var im=lb.querySelector("img"),cnt=lb.querySelector(".lbc"),k=0,N=G.length;
function sh(i){k=(i+N)%N;im.src=G[k];cnt.textContent=kn(k+1)+" / "+kn(N)}
function close(){lb.classList.remove("on");document.body.style.overflow=""}
window.openLB=function(i){if(!G[i])return;sh(i);lb.classList.add("on");document.body.style.overflow="hidden"};
lb.querySelector(".lbx").onclick=close;
lb.querySelector(".lbp").onclick=function(e){e.stopPropagation();sh(k-1)};
lb.querySelector(".lbn").onclick=function(e){e.stopPropagation();sh(k+1)};
lb.addEventListener("click",function(e){if(e.target===lb)close()});
addEventListener("keydown",function(e){if(!lb.classList.contains("on"))return;if(e.key==="Escape")close();else if(e.key==="ArrowLeft")sh(k-1);else if(e.key==="ArrowRight")sh(k+1)});
var x0=null;
lb.addEventListener("touchstart",function(e){x0=e.touches[0].clientX},{passive:true});
lb.addEventListener("touchend",function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(dx)>50)sh(k+(dx<0?1:-1))},{passive:true});
})();

