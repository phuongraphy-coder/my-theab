if(!window.__inv){
var $=function(i){return document.getElementById(i)},K='mt_guests',KC='mt_cfg',cur=null,ed=null;
function ld(k,d){try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}}
var G=ld(K,[]),C=Object.assign({base:'',msg:'សូមគោរពអញ្ជើញ {name} ចូលរួមពិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ {link}'},ld(KC,{}));
function sv(){try{localStorage.setItem(K,JSON.stringify(G));localStorage.setItem(KC,JSON.stringify(C))}catch(e){}}
function esc(t){return String(t==null?'':t).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function bu(){return/^https?:$/.test(location.protocol)&&location.origin!=='null'?location.origin+location.pathname:''}
function enc(s){var b='',i,c;for(i=0;i<s.length;i++){c=s.charCodeAt(i);if(c>=6016&&c<6144)b+=String.fromCharCode(c-6016);else if(c===32)b+='\x80';else b+='\xfe'+String.fromCharCode(c>>8,c&255)}return btoa(b).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function scode(g){var s=String(g.id||g.n),a=2166136261,b=5381,i,c;for(i=0;i<s.length;i++){c=s.charCodeAt(i);a=Math.imul(a^c,16777619)>>>0;b=(Math.imul(b,33)+c)>>>0}return(a.toString(36)+b.toString(36)).replace(/[^a-z0-9]/g,'').slice(0,7).padStart(7,'0')}
/* តំណខ្លី /i/កូដ ៖ ដំណើរការពេល Cloudflare មាន KV (GUESTS) — បើគ្មាន ប្រើតំណបង្រួម ?n= */
var KV=0,RG={};
try{if(/^https?:$/.test(location.protocol))fetch('/api/g?ping=1').then(function(r){return r.json()}).then(function(j){KV=!!(j&&j.kv);render()}).catch(function(){})}catch(e){}
function reg(g){var c=scode(g),k=c+'|'+g.n+'|'+selT();if(RG[k])return;RG[k]=1;try{fetch('/api/g',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({c:c,n:g.n,t:selT()}),keepalive:true}).then(function(r){if(!r.ok)delete RG[k]}).catch(function(){delete RG[k]})}catch(e){delete RG[k]}}
function link(g){var b=bu();if(KV&&b){reg(g);return location.origin+'/i/'+scode(g)}return b+(b.indexOf('?')>-1?'&':'?')+'n='+enc(g.n)+'&t='+selT()}
function msg(g){return C.msg.replace('{name}',function(){return g.n}).replace('{link}',function(){return link(g)})}
function toast(m){var t=$('toast');t.textContent=m;t.style.display='block';clearTimeout(t._t);t._t=setTimeout(function(){t.style.display='none'},2200)}
function nameIn(h,n){var j=JSON.stringify(n).replace(/</g,'\\u003c');if(window.__tpl==3){var e=String(n).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');return h.replace('data-k="ភ្ញៀវកិត្តិយស" data-e="Honoured Guest">ភ្ញៀវកិត្តិយស<',function(){return'data-k="'+e+'" data-e="'+e+'">'+e+'<'})}return window.__tpl==2?h.replace('gname:"",',function(){return'gname:'+j+','}):h.replace('guest:"ភ្ញៀវកិត្តិយស",date:',function(){return'guest:'+j+',date:'})}
function setTpl(n){try{localStorage.setItem('mt_tpl',String(n))}catch(e){}window.__tpl=n}
function invFor(g){return nameIn(invHTML(),g.n)}
var cfcb=null;function ask(t,cb){cfcb=cb;$('cq').textContent=t;$('cf').showModal()}
$('cy').onclick=function(){$('cf').close();if(cfcb)cfcb()};$('cno').onclick=function(){$('cf').close()};
function tab(i){['t0','t1','t2'].forEach(function(x,k){$(x).className=k===i?'':'hide'});$('b0').className=i?'':'on';$('b1').className=i?'on':'';if(i===1)try{syncW()}catch(e){}}
function chk(){if(!bu()){toast('សូមបើកគេហទំព័រតាមតំណ https:// (បន្ទាប់ពី upload) ទើបបង្កើតតំណអញ្ជើញបាន');return false}return true}
function copy(t,m){function ok(){toast(m)}function fb(){var a=document.createElement('textarea');a.value=t;(document.querySelector('dialog[open]')||document.body).appendChild(a);a.select();try{document.execCommand('copy');ok()}catch(e){toast('សូមចម្លងដោយដៃ៖ '+t)}a.remove()}
 if(navigator.clipboard)navigator.clipboard.writeText(t).then(ok,fb);else fb()}
function mark(g){if(!g.s){g.s=1;sv();render()}}
var IP='<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M21 3 3 10.5l7 3 3 7z"/><path d="m10 13.5 11-10.5"/></svg>',
IE='<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
IQ='<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM21 14v.01M14 21h3M21 17v4"/></svg>';
function wt(g){return g.aw&&g.aw.length?g.aw.join(' • '):(g.w||'')}
function render(){
 var gs=[],f=$('gf').value,q=$('q').value.trim().toLowerCase();G.forEach(function(g){if(g.g&&gs.indexOf(g.g)<0)gs.push(g.g)});
 $('gf').innerHTML='<option value="">ក្រុមទាំងអស់</option>'+gs.map(function(x){return'<option'+(x===f?' selected':'')+'>'+esc(x)+'</option>'}).join('');
 $('gl').innerHTML=gs.map(function(x){return'<option value="'+esc(x)+'">'}).join('');
 var r=G.filter(function(g){return(!q||g.n.toLowerCase().indexOf(q)>-1||wt(g).toLowerCase().indexOf(q)>-1)&&(!f||g.g===f)});$('cnt').textContent=G.length+(gMax()<Infinity?' / '+gMax():'');
 $('ls').innerHTML=r.length?r.map(function(g,k){var i=esc(g.id);return'<div class="gr'+(wt(g)?' hw':'')+'"><div class="gc1"><div class="gn"><span class="no">'+String(k+1).replace(/[0-9]/g,function(d){return"០១២៣៤៥៦៧៨៩".charAt(d)})+'.</span> '+esc(g.n)+'</div><div class="gs"><span class="st'+(g.s?' ok':'')+'">'+(g.s?'បានផ្ញើអញ្ជើញ':'មិនទាន់ផ្ញើ')+'</span>'+(wt(g)?'<span class="st wk">💌 បានជូនពរ</span>':'')+'</div></div><div class="gc2">'+(g.g?esc(g.g):'<span class="mt">—</span>')+'</div><div class="gc3">'+(wt(g)?'<span class="wi">💌</span>'+esc(wt(g)):'<span class="mt">—</span>')+'</div><div class="ga"><button class="ic" title="មើលសំបុត្រ" aria-label="មើលសំបុត្រ" data-a="view" data-i="'+i+'">'+IE+'</button><button class="ic" title="ចែករំលែកតំណ" aria-label="ចែករំលែកតំណ" data-a="send" data-i="'+i+'">'+IP+'</button><button class="ic" title="QR Code" aria-label="QR Code" data-a="qr" data-i="'+i+'">'+IQ+'</button><button class="ic" title="ជម្រើសផ្សេងទៀត" aria-label="ជម្រើសផ្សេងទៀត" data-a="more" data-i="'+i+'">⋮</button></div></div>'}).join(''):'<div class="em">មិនទាន់មានភ្ញៀវ សូមចុច «+ បន្ថែមថ្មី»</div>';
}
$('ls').onclick=function(e){var b=e.target.closest('button');if(!b)return;var g=G.find(function(x){return x.id===b.dataset.i});if(!g)return;cur=g;var a=b.dataset.a;
 if(a==='view'){var f=document.createElement('iframe');f.style.cssText='width:100%;height:100%;border:0';f.srcdoc=invFor(g);$('vb').replaceChildren(f);$('vd').showModal()}
 else if(a==='send'){if(!chk())return;$('sn').textContent=g.n;$('sl').value=link(g);$('sd').showModal()}
 else if(a==='qr'){if(!chk())return;$('qn').textContent=g.n;var l=link(g),bx=$('qb');bx.innerHTML='';try{new QRCode(bx,{text:l,width:220,height:220})}catch(x){bx.textContent='QR ត្រូវការអ៊ីនធឺណិត'}$('ql').textContent=l;$('qd').showModal()}
 else{$('mn').textContent=g.n;$('md').showModal()}};
$('qdw').onclick=function(){var c=$('qb').querySelector('canvas');if(!c){toast('QR មិនទាន់រួចរាល់');return}var o=document.createElement('canvas');o.width=o.height=c.width+48;var x=o.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,o.width,o.height);x.drawImage(c,24,24);var a=document.createElement('a');a.href=o.toDataURL('image/png');a.download='qr-'+cur.n.replace(/[^\w\u1780-\u17FF-]+/g,'_')+'.png';a.click()};
$('qsh').onclick=function(){if(navigator.share)navigator.share({text:msg(cur)}).catch(function(){});else copy(msg(cur),'បានចម្លងទាំងសារ');mark(cur)};
$('cl').onclick=function(){var b=this,o=b._o||(b._o=b.textContent);copy(link(cur),'បានចម្លងតំណ');b.textContent='✓ ចម្លងរួច!';clearTimeout(b._t);b._t=setTimeout(function(){b.textContent=o},1800);mark(cur)};
$('cm').onclick=function(){copy(msg(cur),'បានចម្លងទាំងសារ');mark(cur)};
$('rs').onclick=function(){cur.s=0;sv();render();toast('បានកំណត់ឡើងវិញ')};
$('dw').onclick=function(){var g=cur,h=nameIn(invHTML(),g.n);
 var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([h],{type:'text/html'}));a.download='invitation-'+g.n.replace(/[^\w\u1780-\u17FF-]+/g,'_')+'.html';a.click();mark(g)};
$('me').onclick=function(){$('md').close();ed=cur;$('dt').textContent='កែភ្ញៀវ';$('fn').value=cur.n;$('fg').value=cur.g||'';$('dlg').showModal()};
$('mdl').onclick=function(){var g=cur;$('md').close();ask('លុប '+g.n+' ?',function(){G=G.filter(function(x){return x!==g});sv();render()})};
$('add').onclick=function(){if(gFull())return;ed=null;$('fn').value='';$('fg').value='';$('dt').textContent='បន្ថែមភ្ញៀវ';$('dlg').showModal()};$('cn').onclick=function(){$('dlg').close()};
function gMax(){var tp=selT(),H=window.MTLIC||window.MTACCT;return(tp==2||(H&&!H.has(tp)))?10+(+window.MT_EXTRA||0):Infinity}
function gFull(){if(G.length>=gMax()){toast('ម៉ូត Standard អាចដាក់ភ្ញៀវបានតែ '+gMax()+' នាក់ប៉ុណ្ណោះ។ សូមទិញកន្លែងបន្ថែម ឬប្តូរទៅម៉ូត Premium');window.mtBuy&&window.mtBuy('guests');return true}return false}
function saveG(){var n=$('fn').value.trim();if(!n)return;
 if(!ed&&gFull()){$('dlg').close();return}
 if(ed){ed.n=n;ed.g=$('fg').value.trim()}else G.unshift({id:'g'+Date.now()+Math.random().toString(36).slice(2,6),n:n,g:$('fg').value.trim(),s:0});sv();$('dlg').close();render()}
$('sv').onclick=saveG;$('fn').onkeydown=function(e){if(e.key==='Enter')saveG()};
$('q').oninput=$('gf').onchange=render;$('fb').onclick=function(){$('fpn').classList.toggle('hide')};
document.querySelectorAll('.x').forEach(function(b){b.onclick=function(){b.closest('dialog').close()}});
$('b0').onclick=function(){tab(0)};$('b1').onclick=function(){tab(1)};

$('exp').onclick=function(){var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify({G:G,C:C})],{type:'application/json'}));a.download='my-theab-guests.json';a.click()};
$('imp').onclick=function(){$('fi').click()};
$('fi').onchange=function(){var f=this.files[0];if(!f)return;var r=new FileReader();r.onload=function(){try{var d=JSON.parse(r.result);if(Array.isArray(d.G)){ask('ជំនួសទិន្នន័យបច្ចុប្បន្ន?',function(){G=d.G.slice(0,gMax());if(d.G.length>G.length)toast('ម៉ូត Standard ទទួលបានតែ '+gMax()+' នាក់ដំបូង');C=Object.assign(C,d.C||{});sv();render()})}}catch(e){toast('ឯកសារមិនត្រឹមត្រូវ')}};r.readAsText(f)};
$('vw').onclick=function(){var f=document.createElement('iframe');f.style.cssText='width:100%;height:100%;border:0';f.srcdoc=invHTML(1);$('vb').replaceChildren(f);$('vd').showModal()};$('vw2').onclick=function(){var f=document.createElement('iframe');f.style.cssText='width:100%;height:100%;border:0';f.srcdoc=invHTML(2);$('vb').replaceChildren(f);$('vd').showModal()};$('use2').onclick=function(){setTpl(2);loadEd();tab(2);$('pvf').srcdoc=invHTML()};
$('vx').onclick=function(){$('vd').close()};$('vd').onclose=function(){$('vb').replaceChildren()};
var OV={},pt=null,EF={d1:'e_d1',d2:'e_d2',gn:'e_gn',bn:'e_bn',f1:'e_f1',m1:'e_m1',f2:'e_f2',m2:'e_m2',dt:'e_dt',lu:'e_lu',tm:'e_tm',vn:'e_vn',mp:'e_mp'},ODEF={dt:'2027-01-02T17:00',lu:'ថ្ងៃសៅរ៍ ៩រោច ខែបុស្ស ឆ្នាំមមី អដ្ឋស័ក ព.ស.២៥៧០',tm:'វេលាម៉ោង ៥:០០ ល្ងាច',vn:'ភូមិពោធិ៍អណ្ដោត ឃុំជើងភ្នំ ស្រុកបាភ្នំ ខេត្តព្រៃវែង',mp:'11.239676,105.395231'};
var HVK={vd:1,vp:1,gl:1,au:1,ov:1},HV={1:{},2:{},3:{}};
function svOv(){var t=window.__edt||selT(),s={},h={};for(var k in OV){if(HVK[k])h[k]=OV[k];else s[k]=OV[k]}HV[t]=h;try{localStorage.setItem('mt_ovr_'+t,JSON.stringify(s))}catch(e){}}
function pvUpdate(){clearTimeout(pt);pt=setTimeout(function(){$('pvf').srcdoc=invHTML()},500)}
function curLogo(){var h=invRaw();if(window.__tpl==3){var lm=h.match(/--tt:url\(([^)]*)\)/);return lm?lm[1]:''}var q=h.indexOf('<img class="logo" src="');if(q<0)return'';var a=q+23;return h.slice(a,h.indexOf('"',a))}
function showPh(p){if(p){$('phi').src=p;$('phi').classList.remove('hide')}}
function edVis(t){function cd(id){var e=document.getElementById(id);while(e&&!(e.classList&&e.classList.contains('cd')))e=e.parentNode;return e}var hide={ppg:t!=1,phr:t==2,vpv:t==2};for(var k in hide){var c=cd(k);if(c)c.style.display=hide[k]?'none':''}['e_lu','e_tm'].forEach(function(id){var e=document.getElementById(id);if(!e)return;var d=t==3?'none':'';e.style.display=d;var s=e.previousElementSibling;if(s&&s.tagName==='SMALL')s.style.display=d})}
function loadEd(){if(window.__edt){var hh={};for(var kk in OV)if(HVK[kk])hh[kk]=OV[kk];HV[window.__edt]=hh}var t=selT();window.__tpl=t;window.__edt=t;OV=lsOv(t);var hv=HV[t]||{};for(var k2 in hv)OV[k2]=hv[k2];document.body.classList.toggle('t2',t==2);(function(c){if(c)c.style.display=t==3?'':'none'})(document.getElementById('ovc'));(function(c){if(c)c.style.display=t==3?'flex':'none'})(document.getElementById('agm'));agSync();gmSync();edVis(t);(function(c){if(c)c.textContent=t==3?'ផែនទី (បិទភ្ជាប់តំណ Google Maps ឬកូអរដោណេ ឬទុកទទេដើម្បីប្រើអាសយដ្ឋាន)':'ផែនទី (កូអរដោណេ ឧ. 11.23,105.39 ឬទុកទទេដើម្បីប្រើអាសយដ្ឋាន)'})(document.getElementById('mpl'));var b=BT(t),og=ogAg();ODEF.d1=og.d[0];ODEF.d2=og.d[1];for(var k in EF)$(EF[k]).value=OV[k]!==undefined?OV[k]:(b[k]!==undefined?b[k]:(OK[k]?OK[k][0]:ODEF[k]));delete OV.ph;showPh(OV.lg||b.lg||curLogo());loadMore(b);loadAu()}
Object.keys(EF).forEach(function(k){$(EF[k]).oninput=function(){var v=this.value.trim();if(v||k==='mp')OV[k]=v;else delete OV[k];svOv();pvUpdate()}});
$('phf').onchange=function(){var f=this.files[0];if(!f)return;var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var s=Math.min(1,600/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);c.getContext('2d').drawImage(im,0,0,c.width,c.height);OV.lg=c.toDataURL('image/png');svOv();showPh(OV.lg);pvUpdate()};im.src=r.result};r.readAsDataURL(f)};
function bake(src){var s0='/*OVR_'+'START*/',a=src.indexOf(s0),b=src.indexOf('/*OVR_'+'END*/');if(a<0||b<a)throw 0;var cur=window.__edt||selT(),o={tpl:cur};[1,2,3].forEach(function(t){var x=Object.assign({},BT(t));if(t===cur)Object.assign(x,OV);else Object.assign(x,lsOv(t),HV[t]||{});if(t===2&&x.gl&&x.gl.length>6)x.gl=x.gl.slice(0,6);o['t'+t]=x});return src.slice(0,a+s0.length)+JSON.stringify(o).replace(/</g,'\\u003c')+src.slice(b)}
function dlFile(src){var h;try{h=bake(src)}catch(e){toast('ឯកសារមិនត្រឹមត្រូវ');return}var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([h],{type:'text/html'}));a.download='index.html';a.click();toast('បានទាញយក។ សូម upload ជំនួសឯកសារចាស់')}
$('dl').onclick=function(){fetch(location.href.split('#')[0].split('?')[0]).then(function(r){if(!r.ok)throw 0;return r.text()}).then(dlFile).catch(function(){toast('សូមជ្រើសឯកសារដើម index.html');$('sf').click()})};
$('sf').onchange=function(){var f=this.files[0];if(!f)return;var r=new FileReader();r.onload=function(){dlFile(r.result)};r.readAsText(f)};
$('nx').onclick=function(){tab(1)};$('bk').onclick=function(){loadEd();tab(2);$('pvf').srcdoc=invHTML()};
$('vw3').onclick=function(){var f=document.createElement('iframe');f.style.cssText='width:100%;height:100%;border:0';f.srcdoc=invHTML(3);$('vb').replaceChildren(f);$('vd').showModal()};$('use3').onclick=function(){setTpl(3);loadEd();tab(2);$('pvf').srcdoc=invHTML()};$('use').onclick=function(){setTpl(1);loadEd();tab(2);$('pvf').srcdoc=invHTML()};
var GL=[];
function ogAg(){var h=invRaw(),pp=h.split(window.__tpl==3?'<ul class="tlist">':'<ul class="ag">'),r=[],dd=[],x,re=/<div class="dd">([^<]*)<\/div>/g;while(x=re.exec(h))dd.push(x[1]);[1,2].forEach(function(k){var u=pp[k]?pp[k].slice(0,pp[k].indexOf('</ul>')):'',t=[],y,r2=window.__tpl==3?/<b[^>]*>([^<]*)<\/b><span[^>]*>([^<]*)<\/span>/g:/<b>([^<]*)<\/b><span>([^<]*)<\/span>/g;while(y=r2.exec(u))t.push(y[1]+' | '+y[2]);r.push(t.join('\n'))});return{a:r,d:dd}}
function ogGal(){var h=invRaw(),i=h.indexOf('var G=['),e=h.indexOf('];',i);try{return JSON.parse(h.slice(i+6,e+1))}catch(x){return[]}}
function srcOf(id){var h=invRaw(),q=h.indexOf('id="'+id+'"'),a=h.indexOf('src="',q)+5;return h.slice(a,h.indexOf('"',a))}
function maxG(){return window.__edt==2?6:Infinity}
function khn(n){return String(n).replace(/[0-9]/g,function(d){return"០១២៣៤៥៦៧៨៩".charAt(d)})}
function rGl(){$('gl2').innerHTML=GL.map(function(s,i){return'<div class="th2"><img src="'+s+'"><button data-i="'+i+'">✕</button></div>'}).join('');
 var m=maxG(),full=GL.length>=m;$('gcn').textContent=m===Infinity?'':khn(GL.length)+' / '+khn(m)+' សន្លឹក (អតិបរមា)';
 $('gpl').style.opacity=full?'.45':'';$('gpl').style.pointerEvents=full?'none':'';$('gpf').disabled=full}
function loadMore(b){var og=ogAg();['a1','a2'].forEach(function(k,i){$('e_'+k).value=OV[k]!==undefined?OV[k]:(b[k]!==undefined?b[k]:og.a[i])});
 GL=(OV.gl||b.gl||ogGal()).slice(0,maxG());rGl();$('qkp').src=OV.qk||b.qk||srcOf('qrk');$('qup').src=OV.qu||b.qu||srcOf('qru')}
function agSync(){var n=OV.ai==='n',a=$('ag1'),b=$('ag0');if(!a||!b)return;[[a,!n],[b,n]].forEach(function(x){x[0].style.background=x[1]?'#a0643c':'#fff';x[0].style.color=x[1]?'#fff':'inherit';x[0].style.borderColor=x[1]?'#a0643c':'#cdbfae'})}$('ag1').onclick=function(){delete OV.ai;svOv();pvUpdate();agSync()};$('ag0').onclick=function(){OV.ai='n';svOv();pvUpdate();agSync()};function gmSync(){var w=$('gmw');if(!w)return;w.style.display=window.__tpl==3?'':'none';var c=OV.gm==='c';$('gm0').classList.toggle('on',!c);$('gm1').classList.toggle('on',c)}$('gm0').onclick=function(){delete OV.gm;svOv();pvUpdate();gmSync()};$('gm1').onclick=function(){OV.gm='c';svOv();pvUpdate();gmSync()};['a1','a2'].forEach(function(k){$('e_'+k).oninput=function(){OV.a1=$('e_a1').value;OV.a2=$('e_a2').value;svOv();pvUpdate()}});
function pic(f,max,type,cb){var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var s=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);c.getContext('2d').drawImage(im,0,0,c.width,c.height);cb(c.toDataURL(type,.8))};im.src=r.result};r.readAsDataURL(f)}
$('gl2').onclick=function(e){var b=e.target.closest('button');if(!b)return;GL.splice(+b.dataset.i,1);OV.gl=GL.slice();svOv();rGl();pvUpdate()};
$('gpf').onchange=function(){var fs=Array.prototype.slice.call(this.files),room=maxG()-GL.length;this.value='';
 if(room<=0){toast('កម្រងរូបភាពអាចដាក់បានអតិបរមា '+khn(maxG())+' សន្លឹកប៉ុណ្ណោះ');return}
 if(fs.length>room){toast('ដាក់បានអតិបរមា '+khn(maxG())+' សន្លឹក — បានយកតែ '+khn(room)+' សន្លឹកដំបូង');fs=fs.slice(0,room)}
 var n=fs.length;if(!n)return;fs.forEach(function(f){pic(f,900,'image/jpeg',function(d){if(GL.length<maxG())GL.push(d);if(--n===0){OV.gl=GL.slice();svOv();rGl();pvUpdate()}})})};
[['qkf','qk','qkp'],['quf','qu','qup']].forEach(function(x){$(x[0]).onchange=function(){var f=this.files[0];if(f)pic(f,700,'image/png',function(d){OV[x[1]]=d;svOv();$(x[2]).src=d;pvUpdate()})}});
$('ovf').onchange=function(){var f=this.files[0];if(!f)return;if(f.size>25e6){toast('វីដេអូធំពេក (មិនលើស 25MB)');return}var r=new FileReader();r.onload=function(){OV.ov=r.result;$('ovn').textContent=f.name;svOv();pvUpdate();toast('បានផ្ទុកវីដេអូ')};r.readAsDataURL(f)};$('vf').onchange=function(){var f=this.files[0];if(!f)return;if(f.size>25e6){toast('វីដេអូធំពេក (មិនលើស 25MB)');return}var r=new FileReader();r.onload=function(){OV.vd=r.result.split(',')[1];delete OV.vp;$('vn').textContent=f.name;pvUpdate();var v=document.createElement('video');v.muted=true;v.onloadeddata=function(){v.currentTime=Math.min(1,(v.duration||2)/2)};v.onseeked=function(){var c=document.createElement('canvas'),w=Math.min(480,v.videoWidth);c.width=w;c.height=Math.round(v.videoHeight*w/v.videoWidth);c.getContext('2d').drawImage(v,0,0,c.width,c.height);OV.vp=c.toDataURL('image/jpeg',.7);pvUpdate();loadVp();toast('បានផ្ទុកវីដេអូ')};v.src=URL.createObjectURL(f)};r.readAsDataURL(f)};
function phOrig(k){var h=invRaw(),m=k==='pg'?'.ph.a{left:0;top:0;height:310px;background-image:url(':'.ph.b{right:0;top:105px;height:310px;background-image:url(',q=h.indexOf(m);if(q<0)return'';var a=q+m.length;return h.slice(a,h.indexOf(')',a))}
function rawAfter(m,att){var h=invRaw(),q=h.indexOf(m);if(q<0)return'';var a=h.indexOf(att,q)+att.length;return h.slice(a,h.indexOf(att==='poster="'?'"':')',a))}
function auOrig(){var h=invRaw(),q=h.indexOf('<audio id="bgm" src="');if(q<0)return'';var a=q+21;return h.slice(a,h.indexOf('"',a))}
function loadAu(){var b=BT(),p=$('aup');if(!p)return;p.pause();p.src=OV.au||b.au||auOrig();$('an').textContent=(OV.au||b.au)?($('an').dataset.n||'បទដែលបានជ្រើស'):'បទបច្ចុប្បន្ន (បទដើម)'}
$('af').onchange=function(){var f=this.files[0];if(!f)return;if(f.size>15e6){toast('បទចម្រៀងធំពេក (មិនលើស 15MB)');return}var r=new FileReader();r.onload=function(){var d=r.result;if(!/^data:audio\//.test(d))d='data:audio/mpeg;base64,'+d.split(',')[1];OV.au=d;$('an').dataset.n=f.name;loadAu();pvUpdate();toast('បានផ្ទុកបទចម្រៀង។ សូមចុចទាញយក ដើម្បីរក្សាទុកក្នុងឯកសារ')};r.onerror=function(){toast('អានឯកសារមិនបាន')};r.readAsDataURL(f);this.value=''};
$('ar').onclick=function(){delete OV.au;var b=BT();delete b.au;svOv();$('an').dataset.n='';loadAu();pvUpdate();toast('ប្រើបទដើមវិញ')};
function loadVp(){var b=BT();$('vpv').src=OV.vp||b.vp||rawAfter('<video id="vid"','poster="')}
function loadBg(){var b=BT();$('bgp').src=OV.bg||b.bg||rawAfter('--bgimg:url(','--bgimg:url(')}
$('bgf').onchange=function(){var f=this.files[0];if(f)pic(f,900,'image/jpeg',function(d){OV.bg=d;svOv();loadBg();pvUpdate()});this.value=''};
$('bgr').onclick=function(){delete OV.bg;delete BT().bg;svOv();loadBg();pvUpdate()};
function loadPh(){loadVp();loadBg();var b=BT();$('e_ci').value=OV.ci||b.ci||'#7a5a45';$('e_cg').value=OV.cg||b.cg||'#c8946a';$('e_cb').value=OV.cb||b.cb||'#c8946a';$('ppg').src=OV.pg||b.pg||phOrig('pg');$('ppb').src=OV.pb||b.pb||phOrig('pb')}
[['pgf','pg','ppg'],['pbf','pb','ppb']].forEach(function(x){$(x[0]).onchange=function(){var f=this.files[0];if(f)pic(f,800,'image/jpeg',function(d){OV[x[1]]=d;svOv();$(x[2]).src=d;pvUpdate()});this.value=''}});
[['pgr','pg'],['pbr','pb']].forEach(function(x){$(x[0]).onclick=function(){delete OV[x[1]];delete BT()[x[1]];svOv();loadPh();pvUpdate()}});
function hrOrig(){var h=invRaw(),m=window.__tpl==3?'<div class="rhero"><img src="':'<div class="hero"><img src="',q=h.indexOf(m);if(q<0)return'';var a=q+m.length;return h.slice(a,h.indexOf('"',a))}
function loadHr(){var b=BT();$('phr').src=OV.hr||b.hr||hrOrig()}
$('hrf').onchange=function(){var f=this.files[0];if(f)pic(f,1000,'image/jpeg',function(d){OV.hr=d;svOv();$('phr').src=d;pvUpdate()});this.value=''};
$('hrr').onclick=function(){delete OV.hr;delete BT().hr;svOv();loadHr();pvUpdate()};
[['e_ci','ci'],['e_cg','cg'],['e_cb','cb']].forEach(function(x){$(x[0]).oninput=function(){OV[x[1]]=this.value;svOv();pvUpdate()};$(x[0]+'r').onclick=function(){delete OV[x[1]];delete BT()[x[1]];svOv();loadPh();pvUpdate()}});
var pvT='home',SM={bgp:'home',phf:'cover',e_f1:'home',e_gn:'home',pgf:'home',e_ci:'home',e_dt:'date',e_vn:'place',e_d1:'agenda',gl2:'photos',vf:'videos',qkp:'thanks'};
function secOf(c){for(var k in SM)if(c.querySelector('#'+k))return SM[k]}
function pvApply(sm){var d;try{d=$('pvf').contentDocument}catch(e){return}if(!d||!d.body||!pvT)return;var c=d.getElementById('cover');
 d.documentElement.style.scrollBehavior=sm?'smooth':'auto';
 if(pvT==='cover'){if(c){c.classList.remove('gone');c.style.display=''}d.defaultView.scrollTo(0,0);return}
 if(c){c.classList.add('gone');c.style.display='none'}d.body.style.overflow='';
 var T3=window.__tpl==3;if(T3){var s2=d.getElementById('s2');if(s2){s2.classList.remove('on','out');s2.style.display='none'}d.body.classList.remove('intro')}
 var el=d.getElementById(T3?({home:'s4',date:'s5',place:'s6',agenda:'s7',photos:'s8',videos:'vgh',thanks:'s8'})[pvT]||pvT:pvT);if(!el)return;el.classList.add('in');var w=d.defaultView;w.scrollTo(0,w.pageYOffset+el.getBoundingClientRect().top)}
$('pvf').addEventListener('load',function(){pvApply(false)});
$('pvf').addEventListener('load',function(){try{var d=this.contentDocument;try{var W=d.defaultView;W.Element.prototype.scrollIntoView=function(o){var r=this.getBoundingClientRect(),y=W.pageYOffset+r.top,k=o&&o.block;if(k==='center')y-=(W.innerHeight-r.height)/2;else if(k==='end')y-=W.innerHeight-r.height;W.scrollTo({top:y,behavior:(o&&o.behavior)||'auto'})}}catch(e){}if(!d||!d.head||d.getElementById('sbx'))return;var s=d.createElement('style');s.id='sbx';s.textContent='html{scrollbar-width:none;-ms-overflow-style:none}::-webkit-scrollbar{display:none;width:0;height:0}';d.head.appendChild(s)}catch(e){}});
function pvGo(e){var c=e.target.closest&&e.target.closest('.cd');if(!c)return;var t=e.target.id==='e_cb'?'date':secOf(c);if(t&&t!==pvT){pvT=t;pvApply(true)}else if(t){pvApply(true)}}
document.querySelector('.eb').addEventListener('focusin',pvGo);document.querySelector('.eb').addEventListener('click',pvGo);
var _sv=svOv;svOv=function(){_sv();var t=new Date(),z=function(n){return('0'+n).slice(-2)};$('svt').textContent='បានរក្សាទុកក្នុង browser ម៉ោង '+z(t.getHours())+':'+z(t.getMinutes())};
var CLOUD_KEY='main';
function cfgObj(){var cur=window.__edt||selT(),o={tpl:cur};[1,2,3].forEach(function(t){var x=Object.assign({},BT(t));if(t===cur)Object.assign(x,OV);else Object.assign(x,lsOv(t),HV[t]||{});if(t===2&&x.gl&&x.gl.length>6)x.gl=x.gl.slice(0,6);o['t'+t]=x});return o}
function cloudPost(rl,data){return fetch(rl,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'cfg_save',key:CLOUD_KEY,data:data})}).then(function(r){return r.json()})}
function cloudSave(){var rl=(window.TGCFG||{}).relay;if(!rl)return Promise.reject('norelay');var data=JSON.stringify(cfgObj());toast('កំពុងរក្សាទុកលើ Cloud...');
return cloudPost(rl,data).then(function(j){if(!j||!j.ok)throw((j&&j.error)||'fail');toast('☁ រក្សាទុកលើ Cloud រួចរាល់ ('+Math.round(data.length/1024)+' KB) · ភ្ញៀវឃើញភ្លាមៗ')})}
$('svbtn').onclick=function(){svOv();cloudSave().catch(function(e){toast('Cloud មិនដំណើរការ · សូមពិនិត្យតំណ relay ក្នុង config.js និងការ Deploy Apps Script')})};$('bkt').onclick=function(){tab(0);$('thf').srcdoc=invHTML(1);$('thf2').srcdoc=invHTML(2);$('thf3').srcdoc=invHTML(3)};
var _le=loadEd;loadEd=function(){_le.apply(this,arguments);loadPh();loadHr();render();document.querySelectorAll('.t1o').forEach(function(n){n.inert=window.__tpl==2})};
$('thf').srcdoc=invHTML(1);$('thf2').srcdoc=invHTML(2);$('thf3').srcdoc=invHTML(3);
render();

var UW=[],wBusy=0;
function nk(x){return String(x||'').trim().toLowerCase().replace(/\s+/g,' ')}
function syncW(manual){var c=window.TGCFG||{};if(!c.relay){if(manual)toast('មិនទាន់កំណត់ relay');return}if(wBusy)return;wBusy=1;$('wr').style.opacity='.5';
 fetch(c.relay,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'wishes'})}).then(function(r){return r.text()}).then(function(x){var d;try{d=JSON.parse(x)}catch(e){d=null}
  wBusy=0;$('wr').style.opacity='';
  if(!d||!d.ok||!Array.isArray(d.wishes)){$('wss').textContent='⚠ មិនអាចទាញសារជូនពរបាន។ សូមដាក់ Code.gs ថ្មី (មើលការណែនាំ)។';return}
  var by={},seen={};d.wishes.forEach(function(w){var k=nk(w.guest)||nk(w.name);if(!k||!w.text)return;(by[k]=by[k]||[]).push(w)});
  var used={},ch=0;G.forEach(function(g){var k=nk(g.n),l=by[k]||[];if(l.length)used[k]=1;var a=l.map(function(w){return String(w.text)});if(JSON.stringify(a)!==JSON.stringify(g.aw||[])){g.aw=a;ch=1}});
  UW=[];Object.keys(by).forEach(function(k){if(!used[k])by[k].forEach(function(w){UW.push(w)})});
  if(ch)sv();render();
  $('uw').innerHTML=UW.length?'<div class="uwb"><b>💌 សារជូនពរពីអ្នកដែលមិនទាន់ត្រូវនឹងឈ្មោះក្នុងបញ្ជី ('+UW.length+')</b>'+UW.map(function(w){return'<div><b style="display:inline">'+esc(w.name||w.guest)+'</b>៖ '+esc(w.text)+'</div>'}).join('')+'</div>':'';
  var n=new Date();$('wss').textContent='✓ សារជូនពរ៖ '+d.wishes.length+' · ធ្វើបច្ចុប្បន្នភាព '+('0'+n.getHours()).slice(-2)+':'+('0'+n.getMinutes()).slice(-2)}).catch(function(){wBusy=0;$('wr').style.opacity='';$('wss').textContent='⚠ មិនអាចភ្ជាប់ទៅ relay បានទេ'})}
$('wr').onclick=function(){syncW(1)};
setInterval(function(){if(!document.hidden&&$('t1')&&$('t1').className!=='hide')syncW()},30000);
setTimeout(function(){syncW()},800);
}
