(function(){
if(window.__inv)return;
var A=window.AUTHCFG||{},pre=/^#(login|register)$/.test(location.hash),on=!!A.api;
if(!on&&!pre)return;
var $=function(i){return document.getElementById(i)},hd=document.querySelector('header'),lg=document.querySelector('header .lg'),LG=lg?lg.src:'';
var ER={bad_input:'ព័ត៌មានមិនត្រឹមត្រូវ',bad_email:'អ៊ីមែលមិនត្រឹមត្រូវ',weak:'លេខសម្ងាត់ត្រូវមានយ៉ាងតិច ៨ តួអក្សរ',exists:'អ៊ីមែលនេះមានគណនីរួចហើយ',bad_cred:'គណនី ឬលេខសម្ងាត់មិនត្រឹមត្រូវ',locked:'ព្យាយាមច្រើនពេក សូមរង់ចាំ ១០ នាទី',blocked:'គណនីនេះត្រូវបានផ្អាក',bad_code:'លេខកូដមិនត្រឹមត្រូវ ឬផុតកំណត់',mail_fail:'ផ្ញើអ៊ីមែលមិនបាន',net:'មិនអាចតភ្ជាប់ម៉ាស៊ីនបម្រើ សូមព្យាយាមម្តងទៀត',too_big:'ទិន្នន័យធំពេក (រូបភាពច្រើនពេក)',badresp:'ម៉ាស៊ីនបម្រើឆ្លើយមិនត្រឹមត្រូវ (ភាគច្រើនមកពីមិនទាន់ Authorize ឬមិនបាន Deploy កំណែថ្មី)',server:'មានបញ្ហា សូមព្យាយាមម្តងទៀត',nocfg:'ទំព័រសាកល្បង៖ មិនទាន់តភ្ជាប់ backend'};
var TGI='<svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="12" r="12" fill="#fff"/><path fill="#0088cc" d="M5.4 11.9l11.5-4.4c.5-.2 1 .1.8.9l-2 9.2c-.1.7-.6.8-1.1.5l-3-2.2-1.4 1.4c-.2.2-.3.3-.6.3l.2-3.1 5.6-5c.2-.2-.1-.3-.4-.1l-6.9 4.4-3-.9c-.6-.2-.6-.6.3-1z"/></svg>';
var GI='<svg viewBox="0 0 48 48" width="20" height="20"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
var box=document.createElement('div');box.id='auth';box.innerHTML='<div class="ac"><div class="s" style="margin:40px 0">កំពុងពិនិត្យ...</div></div>';document.body.appendChild(box);
function call(a,d){if(!on)return Promise.resolve({ok:false,err:'nocfg'});var c=new AbortController(),t=setTimeout(function(){c.abort()},(a==='save'||a==='load')?90000:25000);
 return fetch(A.api,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(Object.assign({action:a},d||{})),signal:c.signal}).then(function(r){return r.text()}).then(function(x){clearTimeout(t);try{return JSON.parse(x)}catch(e){return{ok:false,err:'badresp'}}}).catch(function(e){clearTimeout(t);console.error('AUTH fetch failed:',e);return{ok:false,err:'net'}})}
function tk(){try{return localStorage.getItem('mt_tok')||''}catch(e){return''}}
function stk(v){try{v?localStorage.setItem('mt_tok',v):localStorage.removeItem('mt_tok')}catch(e){}}
function err(m){var e=$('aerr');if(e)e.textContent=ER[m]||m||''}
function busy(b,f){var x=$(b);if(x)x.disabled=f}
function showUser(u){box.classList.add('hide');ent(u);if($('usr'))return;hd.style.cssText+=';display:flex;align-items:center;justify-content:space-between;gap:12px';
 var d=document.createElement('div');d.id='usr';d.style.cssText="display:flex;align-items:center;gap:10px;font:600 14px 'Kantumruy Pro',system-ui,sans-serif";
 var n=document.createElement('span');n.style.cssText='max-width:38vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap';n.textContent=u.name||u.email||'';
 var b=document.createElement('button');b.className='btn';b.style.cssText='min-height:34px;padding:4px 12px';b.textContent='ចាកចេញ';
 b.onclick=function(){logout()};var y=document.createElement('span');y.id='sy';y.style.cssText='font-weight:400;font-size:13px;opacity:.8';y.textContent='✓';y.title='រក្សាទុកក្នុងគណនីរួចរាល់';d.appendChild(n);d.appendChild(y);d.appendChild(b);hd.appendChild(d)}

/* ===== ភ្ជាប់ទិន្នន័យសំបុត្រទៅគណនី (Cloud sync) ===== */
var SY=['mt_ovr_1','mt_ovr_2','mt_ovr_3','mt_tpl','mt_guests','mt_cfg'],UID='',DIRTY=0,LOADED=0,TM=0,LS=window.localStorage,SI=Storage.prototype.setItem,RI=Storage.prototype.removeItem;
function lget(k){try{return LS.getItem(k)}catch(e){return null}}
function ls(k,v){try{SI.call(LS,k,v)}catch(e){}}
function lr(k){try{RI.call(LS,k)}catch(e){}}
function st(c,m){var s=$('sy');if(s){s.textContent=c;s.title=m||''}}
function mark(){DIRTY=1;ls('mt_dirty','1');st('…','កំពុងរង់ចាំរក្សាទុក');clearTimeout(TM);TM=setTimeout(push,3000)}
Storage.prototype.setItem=function(k,v){SI.call(this,k,v);if(this===LS&&UID&&LOADED&&SY.indexOf(k)>=0)mark()};
Storage.prototype.removeItem=function(k){RI.call(this,k);if(this===LS&&UID&&LOADED&&SY.indexOf(k)>=0)mark()};
function snapD(){var o={};SY.forEach(function(k){var v=lget(k);if(v!==null)o[k]=v});return o}
function hasLocal(){return SY.some(function(k){return k!=='mt_tpl'&&lget(k)!==null})}
function push(){if(!UID||!LOADED)return Promise.resolve(false);clearTimeout(TM);var d=snapD(),sn=JSON.stringify(d);
 return call('save',{token:tk(),data:d}).then(function(r){if(r&&r.ok){ls('mt_sync_at',String(r.updated));if(JSON.stringify(snapD())===sn){DIRTY=0;lr('mt_dirty');st('✓','រក្សាទុកក្នុងគណនីរួចរាល់')}else mark();return true}
  st('⚠','មិនទាន់រក្សាទុកបាន នឹងព្យាយាមម្តងទៀត');clearTimeout(TM);TM=setTimeout(push,20000);return false})}
function apply(o){SY.forEach(function(k){if(o&&typeof o[k]==='string')ls(k,o[k]);else lr(k)})}
function syncStart(u){UID=String(u.id||'');return call('load',{token:tk()}).then(function(r){
 if(!r||!r.ok)return{fail:(r&&r.err)||'net'};
 var own=lget('mt_owner'),srv=(r.data&&Object.keys(r.data).length)?r.data:null,useS=false,clr=false;
 if(own===UID){if(srv&&Number(r.updated)>Number(lget('mt_sync_at')||0)&&lget('mt_dirty')!=='1')useS=true}
 else if(srv){useS=(own||!hasLocal())?true:confirm('ទិន្នន័យក្នុងគណនី និងក្នុង browser នេះផ្សេងគ្នា។\nOK = ប្រើទិន្នន័យពីគណនី\nCancel = រក្សាទិន្នន័យក្នុង browser នេះ (ជំនួសទិន្នន័យក្នុងគណនី)')}
 else if(own)clr=true;
 ls('mt_owner',UID);
 if(useS){apply(srv);ls('mt_sync_at',String(r.updated));lr('mt_dirty');LOADED=1;return{reload:true}}
 if(clr){SY.forEach(lr);lr('mt_dirty');ls('mt_sync_at','0');LOADED=1;return{reload:true}}
 LOADED=1;if(lget('mt_dirty')==='1'||(!srv&&hasLocal())||(srv&&own!==UID))mark();return{}})}
function setUser(u){box.innerHTML='<div class="ac"><div class="s" style="margin:40px 0">កំពុងរៀបចំទិន្នន័យរបស់អ្នក...</div></div>';box.classList.remove('hide');
 syncStart(u).then(function(x){if(x.reload){location.reload();return}
  if(x.fail){if(x.fail==='bad_cred'){stk('');view('login');return}box.innerHTML='<div class="ac"><img src="'+LG+'" alt=""><div class="aerr" id="aerr"></div><button class="ab rd" id="bretry" type="button">ព្យាយាមម្តងទៀត</button></div>';err(x.fail);$('bretry').onclick=function(){setUser(u)};return}
  showUser(u)})}
function logout(){var go=function(){call('logout',{token:tk()}).then(function(){SY.forEach(lr);lr('mt_owner');lr('mt_sync_at');lr('mt_dirty');stk('');location.reload()})};
 if(DIRTY||lget('mt_dirty')==='1'){push().then(function(ok){if(ok||confirm('មិនអាចរក្សាទុកទិន្នន័យថ្មីៗបានទេ។ ចាកចេញនឹងបាត់ទិន្នន័យទាំងនោះ។ បន្ត?'))go()})}else go()}
document.addEventListener('visibilitychange',function(){if(document.hidden&&DIRTY)push()});
addEventListener('beforeunload',function(e){if(DIRTY){e.preventDefault();e.returnValue=''}});

/* ===== សិទ្ធិទិញ៖ ម៉ូតទី១ (Premium) និងកន្លែងភ្ញៀវបន្ថែមក្នុងម៉ូតទី២ — អ្នកលក់បើកសិទ្ធិដោយដៃក្នុង Google Sheet ===== */
var CU=null,UB={};
function ent(u){CU=u||CU||{};window.MT_PREM=!!CU.prem;window.MT_ROYAL=!!CU.royal;window.MT_EXTRA=+CU.guestExtra||0;
  [['use','Premium'],['use3','Royal']].forEach(function(x){var b=$(x[0]);if(b){if(!(x[0] in UB))UB[x[0]]=b.innerHTML;b.innerHTML=(x[0]==='use3'?window.MT_ROYAL:window.MT_PREM)?UB[x[0]]:'<span>🔒</span>ទិញ '+x[1]}});
 try{var q=$('q');if(q)q.dispatchEvent(new Event('input'))}catch(e){}}
function buy(kind){var old=$('bm');if(old)old.remove();var m=document.createElement('div');m.id='bm';
 var g=kind==='guests',nm=kind==='t3'?'Royal':'Premium',pr=(window.MT_PRICE||{})[g?'t2':(kind==='t3'?'t3':'t1')],pk=(A.packs&&A.packs.length?A.packs:[10,20,50,100]);
 var h='<div class="ac"><button class="x" type="button" id="bx" aria-label="close">×</button><h1>'+(g?'ទិញកន្លែងភ្ញៀវបន្ថែម':'ទិញម៉ូត '+nm)+'</h1><p class="s">'+(g?'ម៉ូត Standard ដាក់ភ្ញៀវបាន ១០ នាក់ឥតគិតថ្លៃ (ឥឡូវអ្នកមាន '+(10+(+window.MT_EXTRA||0))+' នាក់)':'ម៉ូតនេះត្រូវទិញ ដើម្បីបើកសិទ្ធិកែប្រែ')+(pr?' · តម្លៃ '+pr:'')+'</p>';
 if(g){h+='<label class="al" for="bn">ចំនួនកន្លែងបន្ថែម</label><select id="bn">'+pk.map(function(n){return'<option value="'+(+n)+'">+ '+(+n)+' នាក់</option>'}).join('')+'</select>'}
 h+='<div class="bx"><b>របៀបទិញ</b><ol><li>ទូទាត់ប្រាក់'+(A.buyNote?'៖ <span id="bnt"></span>':' តាមការណែនាំរបស់អ្នកលក់')+'</li><li>ផ្ញើរូបបង្កាន់ដៃតាម Telegram រួមជាមួយអ៊ីមែលគណនីរបស់អ្នក</li><li>រង់ចាំអ្នកលក់បើកសិទ្ធិ រួចចុច «ពិនិត្យសិទ្ធិ»</li></ol></div>'
  +(A.buyTg?'<a class="ab atg" id="btl" target="_blank" rel="noopener">'+TGI+'<span>ផ្ញើបង្កាន់ដៃតាម Telegram</span></a>':'<div class="aerr">មិនទាន់កំណត់ Telegram របស់អ្នកលក់ (buyTg)</div>')
  +'<button class="ab" id="bck" type="button">ពិនិត្យសិទ្ធិ</button><div class="aerr" id="bms"></div></div>';
 m.innerHTML=h;document.body.appendChild(m);
 if($('bnt'))$('bnt').textContent=A.buyNote;
 function lnk(){var a=$('btl');if(!a)return;var n=g?($('bn').value):'';var tx='សួស្តី ខ្ញុំចង់ទិញ'+(g?' កន្លែងភ្ញៀវបន្ថែម '+n+' នាក់ (ម៉ូតទី២)':' ម៉ូត '+nm+' ('+(kind==='t3'?'ម៉ូតទី៣':'ម៉ូតទី១')+')')+'\nអ៊ីមែល/ID៖ '+((CU&&CU.email)||'')+' / '+((CU&&CU.id)||'');a.href='https://t.me/'+encodeURIComponent(A.buyTg)+'?text='+encodeURIComponent(tx)}
 lnk();if($('bn'))$('bn').onchange=lnk;
 $('bx').onclick=function(){m.remove()};m.addEventListener('click',function(e){if(e.target===m)m.remove()});
 $('bck').onclick=function(){var b=$('bck');b.disabled=true;call('me',{token:tk()}).then(function(r){b.disabled=false;var s=$('bms');if(r&&r.ok){var pm=window.MT_PREM,ex=window.MT_EXTRA;ent(r.user);if(g?(window.MT_EXTRA>ex):(kind==='t3'?window.MT_ROYAL:window.MT_PREM)){m.remove();alert('✓ បានបើកសិទ្ធិរួចរាល់')}else{s.style.color='';s.textContent='មិនទាន់មានការបើកសិទ្ធិ សូមរង់ចាំអ្នកលក់បញ្ជាក់'}}else{s.textContent=ER[(r&&r.err)||'net']||''}})}}
window.mtBuy=buy;window.MTACCT={has:function(x){return +x===2?true:(+x===3?!!window.MT_ROYAL:!!window.MT_PREM)}};
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('#use,#use3');if(b&&UID&&!(b.id==='use3'?window.MT_ROYAL:window.MT_PREM)){e.stopImmediatePropagation();e.preventDefault();buy(b.id==='use3'?'t3':'t1')}},true);
document.addEventListener('visibilitychange',function(){if(!document.hidden&&UID){call('me',{token:tk()}).then(function(r){if(r&&r.ok)ent(r.user)})}});
function done(r){if(r&&r.ok&&r.token){stk(r.token);setUser(r.user||{})}else{err(r&&r.err||'server');['bl','br','bf','bf2'].forEach(function(b){busy(b,false)})}}
var gOk=0,tgOk=0;
if(A.gClient){var s=document.createElement('script');s.src='https://accounts.google.com/gsi/client';s.async=1;s.onload=function(){gOk=1;try{google.accounts.id.initialize({client_id:A.gClient,callback:function(x){call('google',{credential:x.credential}).then(done)}})}catch(e){gOk=0}rg()};document.head.appendChild(s)}
if(A.tgBot){var t=document.createElement('script');t.src='https://telegram.org/js/telegram-widget.js?22';t.async=1;t.onload=function(){tgOk=1};document.head.appendChild(t)}
function rg(){var e=$('gbtn');if(!e||!gOk)return;try{google.accounts.id.renderButton(e,{theme:'outline',size:'large',shape:'pill',text:'signin_with',width:Math.min(392,e.clientWidth||340)})}catch(x){}}
function tgLogin(){if(!A.tgBot||!tgOk){err('nocfg');return}Telegram.Login.auth({bot_id:A.tgBot,request_access:'write'},function(u){if(!u){err('server');return}call('telegram',{auth:u}).then(done)})}
function soc(){return '';return '<button class="ab atg" id="btg" type="button">'+TGI+'<span>ចូលតាមរយៈ: Telegram</span></button>'+(A.gClient?'<div id="gbtn"></div>':'<button class="ab" id="bgo" type="button">'+GI+'<span>ចូលតាមរយៈ: Google</span></button>')+'<div class="ad">ឬ</div>'}
function eye(id){return '<div class="aw"><input class="ai" id="'+id+'" type="password" autocomplete="'+(id==='pw'?'current-password':'new-password')+'" placeholder="បញ្ចូលលេខសម្ងាត់"><button class="ey" type="button" data-e="'+id+'" aria-label="show">👁</button></div>'}
function wire(){var e=box.querySelectorAll('.ey');for(var i=0;i<e.length;i++)e[i].onclick=function(){var p=$(this.getAttribute('data-e'));p.type=p.type==='password'?'text':'password'};
 if($('btg'))$('btg').onclick=tgLogin;if($('bgo'))$('bgo').onclick=function(){err('nocfg')};rg();
 var l=box.querySelectorAll('[data-v]');for(var j=0;j<l.length;j++)l[j].onclick=function(){view(this.getAttribute('data-v'))};
 box.querySelectorAll('input').forEach(function(x){x.addEventListener('keydown',function(ev){if(ev.key==='Enter'){var b=box.querySelector('.ab.rd');if(b)b.click()}})})}
function view(v){var h='<div class="ac"><img src="'+LG+'" alt="My Theab">';
 if(v==='login')h+='<h1>ចូលទៅកាន់គណនីរបស់អ្នក</h1><p class="s">ចូលទៅកាន់គណនី ដោយសុវត្ថិភាព និងងាយស្រួលប្រើប្រាស់</p>'+soc()+'<label class="al" for="id">លេខទូរស័ព្ទ ឬ អ៊ីមែល</label><input class="ai" id="id" autocomplete="username" placeholder="សូមបញ្ចូលលេខទូរស័ព្ទ ឬ អ៊ីមែល"><label class="al" for="pw">លេខសម្ងាត់</label>'+eye('pw')+'<div class="afg"><button class="alk" type="button" data-v="forgot">ភ្លេចលេខសម្ងាត់?</button></div><div class="aerr" id="aerr"></div><button class="ab rd" id="bl" type="button">ចូល</button><p class="aft">មិនទាន់មានគណនីមែនទេ? <button class="alk" type="button" data-v="register">ចុះឈ្មោះនៅទីនេះ</button></p>';
 else if(v==='register')h+='<h1>បង្កើតគណនីរបស់អ្នក</h1><p class="s">សុវត្ថិភាព និងងាយស្រួលប្រើប្រាស់។</p><label class="al" for="em">អ៊ីមែល</label><input class="ai" id="em" type="email" autocomplete="email" placeholder="example@gmail.com"><label class="al" for="pw">លេខសម្ងាត់</label>'+eye('pw')+'<div class="ah">យ៉ាងតិច ៨ តួអក្សរ</div><label class="al" for="pw2">បញ្ជាក់លេខសម្ងាត់</label>'+eye('pw2')+'<div class="aerr" id="aerr"></div><button class="ab rd" id="br" type="button">បង្កើតគណនី</button>'+'<div class="ad">ឬ</div>'+soc().replace('<div class="ad">ឬ</div>','')+'<p class="aft">ធ្លាប់មានគណនីហើយ? <button class="alk" type="button" data-v="login">ចុចទីនេះ</button></p>';
 else h+='<h1>ភ្លេចលេខសម្ងាត់</h1><p class="s">បញ្ចូលអ៊ីមែល យើងនឹងផ្ញើលេខកូដ ៦ ខ្ទង់ទៅអ្នក</p><label class="al" for="em">អ៊ីមែល</label><input class="ai" id="em" type="email" placeholder="example@gmail.com"><button class="ab" id="bf" type="button" style="margin-top:14px">ផ្ញើលេខកូដ</button><label class="al" for="cd">លេខកូដ ៦ ខ្ទង់</label><input class="ai" id="cd" inputmode="numeric" maxlength="6" placeholder="••••••"><label class="al" for="pw">លេខសម្ងាត់ថ្មី</label>'+eye('pw')+'<div class="aerr" id="aerr"></div><button class="ab rd" id="bf2" type="button">ប្តូរលេខសម្ងាត់</button><p class="aft"><button class="alk" type="button" data-v="login">← ត្រឡប់ទៅចូល</button></p>';
 box.innerHTML=h+'</div>';wire();
 if(v==='login')$('bl').onclick=function(){var i=$('id').value.trim(),p=$('pw').value;if(!i||!p){err('bad_input');return}err('');busy('bl',true);call('login',{id:i,password:p}).then(done)};
 if(v==='register')$('br').onclick=function(){var e=$('em').value.trim(),p=$('pw').value;if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)){err('bad_email');return}if(p.length<8){err('weak');return}if(p!==$('pw2').value){err('លេខសម្ងាត់មិនដូចគ្នា');return}err('');busy('br',true);call('register',{email:e,password:p}).then(done)};
 if(v==='forgot'){$('bf').onclick=function(){var e=$('em').value.trim();if(!e){err('bad_email');return}busy('bf',true);call('forgot',{email:e}).then(function(r){busy('bf',false);err(r&&r.ok?'បានផ្ញើលេខកូដទៅអ៊ីមែលរបស់អ្នក (សូមពិនិត្យ Spam ផងដែរ)':(r&&r.err)||'server');if(r&&r.ok)$('aerr').style.color='#2e7d32'})};
  $('bf2').onclick=function(){var p=$('pw').value;if(p.length<8){err('weak');return}$('aerr').style.color='';busy('bf2',true);call('reset',{email:$('em').value.trim(),code:$('cd').value.trim(),password:p}).then(function(r){busy('bf2',false);if(r&&r.ok){view('login');err('ប្តូរលេខសម្ងាត់រួចរាល់ សូមចូលម្តងទៀត');$('aerr').style.color='#2e7d32'}else err(r&&r.err||'server')})}}}
if(!on){view(location.hash==='#register'?'register':'login');return}
var t0=tk();if(!t0){view('login');return}
call('me',{token:t0}).then(function(r){if(r&&r.ok)setUser(r.user);else{if(!r||r.err!=='net')stk('');view('login');if(r&&r.err==='net')err('net')}});
})();
