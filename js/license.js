(function(){if(window.AUTHCFG&&window.AUTHCFG.api)return;
function sha256(s){var m=unescape(encodeURIComponent(s)),l=m.length,w=[],i,j,H=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19],K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2],W=new Array(64);
function R(x,n){return(x>>>n)|(x<<(32-n))}
for(i=0;i<l;i++)w[i>>2]|=m.charCodeAt(i)<<(24-(i%4)*8);w[l>>2]|=0x80<<(24-(l%4)*8);w[(((l+8)>>6)<<4)+15]=l*8;
for(j=0;j<w.length;j+=16){var a=H[0],b=H[1],c=H[2],d=H[3],e=H[4],f=H[5],g=H[6],h=H[7];
for(i=0;i<64;i++){W[i]=i<16?(w[j+i]|0):((R(W[i-2],17)^R(W[i-2],19)^(W[i-2]>>>10))+W[i-7]+(R(W[i-15],7)^R(W[i-15],18)^(W[i-15]>>>3))+W[i-16])|0;
var t1=(h+(R(e,6)^R(e,11)^R(e,25))+((e&f)^(~e&g))+K[i]+W[i])|0,t2=((R(a,2)^R(a,13)^R(a,22))+((a&b)^(a&c)^(b&c)))|0;
h=g;g=f;f=e;e=(d+t1)|0;d=c;c=b;b=a;a=(t1+t2)|0}
H[0]=(H[0]+a)|0;H[1]=(H[1]+b)|0;H[2]=(H[2]+c)|0;H[3]=(H[3]+d)|0;H[4]=(H[4]+e)|0;H[5]=(H[5]+f)|0;H[6]=(H[6]+g)|0;H[7]=(H[7]+h)|0}
return H.map(function(x){return('0000000'+(x>>>0).toString(16)).slice(-8)}).join('')}
var C=window.MTLIC_CFG||{},KEY='mt_lic',$=function(i){return document.getElementById(i)};
var RX=/^(P|R|B|G\d{1,4})-([2-9A-HJ-NP-Z]{8})-([0-9A-F]{8})$/;
function norm(c){return String(c||'').toUpperCase().replace(/[^A-Z0-9-]/g,'')}
function ver(c){var m=RX.exec(norm(c));if(!m)return null;return sha256(C.secret+'|'+m[1]+'|'+m[2]).slice(0,8).toUpperCase()===m[3]?m[1]:null}
function load(){try{var a=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(a)?a:[]}catch(e){return[]}}
function save(a){try{localStorage.setItem(KEY,JSON.stringify(a))}catch(e){}}
function calc(){var u={1:0,3:0},ex=0,seen={};load().forEach(function(c){c=norm(c);if(seen[c])return;seen[c]=1;var t=ver(c);if(!t)return;if(t==='P')u[1]=1;else if(t==='R')u[3]=1;else if(t==='B'){u[1]=1;u[3]=1}else ex+=+t.slice(1)});return{u:u,ex:ex}}
function has(t){return +t===2?true:!!calc().u[+t]}
function sync(){var e=calc().ex;window.MT_EXTRA=e;return e}
var NAMES={1:'Premium',3:'Royal'},BTN={1:'use',3:'use3'},orig={};
function labels(){var c=calc();[1,3].forEach(function(t){var b=$(BTN[t]);if(!b)return;if(!(t in orig))orig[t]=b.innerHTML;b.innerHTML=c.u[t]?orig[t]:'<span>\uD83D\uDD12</span>ទិញ '+NAMES[t]});
 var P=window.MT_PRICE=window.MT_PRICE||{},pr=C.price||{};P.t1=pr.t1||P.t1||'';P.t3=pr.t3||P.t3||'';[1,3].forEach(function(n){var e=$('pr'+n);if(e)e.textContent=P['t'+n]||''})}
function close(){var m=$('lm');if(m)m.remove()}
function open(kind,after){close();var g=kind==='guests',t=g?0:+kind.slice(1),pr=(C.price||{})[g?'guests':'t'+t],pk=(C.packs&&C.packs.length?C.packs:[10,20,50,100]);
 var m=document.createElement('div');m.id='lm';
 var h='<div class="lc" role="dialog" aria-modal="true"><button class="lx" type="button" id="lmx" aria-label="close">\u00D7</button><h1>'+(g?'ទិញកន្លែងភ្ញៀវបន្ថែម':'\uD83D\uDD12 ម៉ូត '+NAMES[t]+' ត្រូវទិញ')+'</h1><p class="ls">'+(g?'ម៉ូត Standard ដាក់ភ្ញៀវបាន ១០ នាក់ឥតគិតថ្លៃ (ឥឡូវអ្នកមាន '+(10+sync())+' នាក់)':'ម៉ូតនេះត្រូវទិញ ដើម្បីបើកសិទ្ធិកែប្រែ')+(pr?' \u00B7 តម្លៃ '+'<span id="lmp"></span>':'')+'</p>';
 if(g)h+='<label for="lmn">ចំនួនកន្លែងបន្ថែម</label><select id="lmn">'+pk.map(function(n){return'<option value="'+(+n)+'">+ '+(+n)+' នាក់</option>'}).join('')+'</select>';
 h+='<div class="lbx"><b>របៀបទិញ</b><ol><li>ទូទាត់ប្រាក់'+(C.buyNote?'៖ <span id="lmt"></span>':' តាមការណែនាំរបស់អ្នកលក់')+'</li><li>ផ្ញើរូបបង្កាន់ដៃតាម Telegram</li><li>ទទួលលេខកូដបើកសិទ្ធិ រួចបញ្ចូលខាងក្រោម</li></ol></div>'
  +(C.buyTg?'<a class="lbtn g" id="lml" target="_blank" rel="noopener">ផ្ញើបង្កាន់ដៃតាម Telegram</a>':'<div class="lms">មិនទាន់កំណត់ Telegram របស់អ្នកលក់ (buyTg)</div>')
  +'<label for="lmc">លេខកូដបើកសិទ្ធិ</label><input id="lmc" autocomplete="off" spellcheck="false" placeholder="R-XXXXXXXX-XXXXXXXX"><button class="lbtn" id="lmb" type="button">បើកសិទ្ធិ</button><div class="lms" id="lms"></div></div>';
 m.innerHTML=h;document.body.appendChild(m);
 if($('lmp'))$('lmp').textContent=pr;if($('lmt'))$('lmt').textContent=C.buyNote;
 function lnk(){var a=$('lml');if(!a)return;var tx='សួស្តី ខ្ញុំចង់ទិញ'+(g?' កន្លែងភ្ញៀវបន្ថែម '+$('lmn').value+' នាក់ (ម៉ូត Standard)':' ម៉ូត '+NAMES[t]);a.href='https://t.me/'+encodeURIComponent(C.buyTg)+'?text='+encodeURIComponent(tx)}
 lnk();if($('lmn'))$('lmn').onchange=lnk;
 $('lmx').onclick=close;m.addEventListener('click',function(e){if(e.target===m)close()});
 function go(){var s=$('lms'),c=norm($('lmc').value),tp=ver(c);s.className='lms';
  if(!c){s.textContent='សូមបញ្ចូលលេខកូដ';return}
  if(!tp){s.textContent='លេខកូដមិនត្រឹមត្រូវ';return}
  var a=load().map(norm);if(a.indexOf(c)>-1){s.textContent='លេខកូដនេះបានប្រើរួចហើយក្នុងឧបករណ៍នេះ';return}
  a.push(c);save(a);sync();labels();
  var ok=g?(tp[0]==='G'):(tp==='B'||(tp==='P'&&t===1)||(tp==='R'&&t===3));
  if(ok){close();try{toast('\u2713 បានបើកសិទ្ធិរួចរាល់')}catch(e){}if(after)setTimeout(after,60)}
  else{s.className='lms ok';s.textContent='\u2713 បានបន្ថែមសិទ្ធិ ប៉ុន្តែមិនត្រូវនឹងអ្វីដែលអ្នកកំពុងបើក'}}
 $('lmb').onclick=go;$('lmc').addEventListener('keydown',function(e){if(e.key==='Enter')go()});setTimeout(function(){try{$('lmc').focus()}catch(e){}},50)}
window.MTLIC={has:has,extra:sync,open:open,verify:ver};
window.mtBuy=function(kind){open(kind==='guests'?'guests':(kind==='t3'?'t3':'t1'))};
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('#use,#use3,#bk');if(!b)return;
 var t=b.id==='use'?1:b.id==='use3'?3:(typeof selT==='function'?selT():2);
 if(t!==2&&!has(t)){e.stopImmediatePropagation();e.preventDefault();open('t'+t,function(){b.click()})}},true);
sync();labels();
})();
