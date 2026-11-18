/* ប៊ូតុងទំនាក់ទំនង Telegram (ជ្រុងខាងក្រោមស្តាំ) — ប្រើ AUTHCFG.buyTg */
(function(){
if(window.__inv)return;
function add(){
if(window.__inv||document.getElementById("ctg"))return;
var u=((window.AUTHCFG&&window.AUTHCFG.buyTg)||"mytheab").replace(/^@/,"");
var st=document.createElement("style");
st.textContent="#ctg{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));z-index:60;display:flex;align-items:center;gap:8px;padding:12px 18px;border-radius:999px;background:#229ed9;color:#fff;font-weight:600;font-size:14px;line-height:1;font-family:inherit;text-decoration:none;box-shadow:0 8px 22px #0003;transition:transform .15s,box-shadow .15s}#ctg:hover{transform:translateY(-2px);box-shadow:0 12px 28px #0004}#ctg svg{width:22px;height:22px;flex:none}@media(max-width:480px){#ctg{padding:13px}#ctg span{display:none}}";
document.head.appendChild(st);
var a=document.createElement("a");
a.id="ctg";a.href="https://t.me/"+encodeURIComponent(u);a.target="_blank";a.rel="noopener";a.setAttribute("aria-label","Telegram");
a.innerHTML='<svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.1 1.4 11.6c-1-.3-1-1 .2-1.5L20.2 2.9c.9-.3 1.6.2 1.7 1.4z"/></svg><span>ទំនាក់ទំនង</span>';
document.body.appendChild(a);
/* បង្ហាញតែក្នុងទំព័រមុខ (ជ្រើសម៉ូត #t0) */
var t0=document.getElementById("t0");function upd(){var on=t0&&!t0.classList.contains("hide")&&getComputedStyle(t0).display!=="none";a.style.display=on?"":"none"}upd();if(t0&&window.MutationObserver)new MutationObserver(upd).observe(t0,{attributes:true,attributeFilter:["class","style"]});setInterval(upd,500)}
if(document.body)add();else document.addEventListener("DOMContentLoaded",add)})();
