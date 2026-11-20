/* Cloudflare Pages — _worker.js
   ធ្វើឱ្យ preview តំណ (Telegram/Facebook) បង្ហាញឈ្មោះភ្ញៀវ + ឈ្មោះកូនប្រុស-កូនស្រី + រូប ដោយស្វ័យប្រវត្តិ
   - ឈ្មោះភ្ញៀវ៖ ពី ?n=កូដ (ឬ ?to=ឈ្មោះ)
   - ឈ្មោះកូនប្រុស/ស្រី៖ ពី OVR ក្នុង index.html (ទិន្នន័យដែលបាន «ទាញយកឯកសារថ្មី») បើគ្មាន ប្រើ FALLBACK ខាងក្រោម
   - រូប៖ ឯកសារ og.jpg (1200x630) នៅថតគោល បើគ្មាន ប្រើ Logo */
const FALLBACK = { groom: '', bride: '' };   /* ឧ. { groom: 'សុភា', bride: 'សុភី' } */

function decode(n) {
  try {
    let s = n.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '=';
    const b = atob(s); let o = '', i = 0, c;
    while (i < b.length) {
      c = b.charCodeAt(i++);
      if (c < 128) o += String.fromCharCode(6016 + c);
      else if (c === 128) o += ' ';
      else { o += String.fromCharCode(b.charCodeAt(i) * 256 + b.charCodeAt(i + 1)); i += 2; }
    }
    return o;
  } catch (e) { return ''; }
}
const esc = t => String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    /* API: ចុះឈ្មោះកូដភ្ញៀវ → ឈ្មោះ (រក្សាក្នុង KV ឈ្មោះ GUESTS) */
    if (url.pathname === '/api/g') {
      const J = (o, s) => new Response(JSON.stringify(o), { status: s || 200, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
      if (request.method === 'GET') return J({ kv: !!env.GUESTS });
      if (!env.GUESTS) return J({ ok: 0 }, 501);
      try {
        const d = await request.json(), c = String(d.c || ''), n = String(d.n || '').trim().slice(0, 80), t = +d.t;
        if (!/^[a-z0-9]{4,12}$/.test(c) || !n || !(t >= 1 && t <= 3)) return J({ ok: 0 }, 400);
        await env.GUESTS.put(c, JSON.stringify({ n, t }));
        return J({ ok: 1 });
      } catch (e) { return J({ ok: 0 }, 400); }
    }
    /* តំណខ្លី /i/កូដ → សំបុត្ររបស់ភ្ញៀវនោះ */
    let short = null;
    const sm = url.pathname.match(/^\/i\/([a-z0-9]{4,12})\/?$/);
    if (sm && env.GUESTS && request.method === 'GET') {
      try { short = await env.GUESTS.get(sm[1], 'json'); } catch (e) {}
    }
    if (short) url.searchParams.set('to', short.n), url.searchParams.set('t', short.t);
    const res = await env.ASSETS.fetch(short ? new Request(url.origin + '/') : request);
    if (request.method !== 'GET' || (!short && url.pathname !== '/' && url.pathname !== '/index.html')) return res;
    if (!(res.headers.get('content-type') || '').includes('text/html')) return res;
    let name = (url.searchParams.get('to') || '').trim();
    if (!name && url.searchParams.get('n')) name = decode(url.searchParams.get('n')).trim();
    if (!name) return res;
    name = name.slice(0, 80);

    let html = await res.text(), g = FALLBACK.groom, b = FALLBACK.bride;
    try {
      const m = html.match(/OVR_START\*\/([\s\S]*?)\/\*OVR_END/);
      if (m) { const o = JSON.parse(m[1]), t = o['t' + o.tpl] || {}; g = t.gn || g; b = t.bn || b; }
    } catch (e) {}
    const couple = g && b ? g + ' និង ' + b : (g || b);
    const title = 'សូមគោរពអញ្ជើញ ' + name;
    const desc = 'សិរីមង្គលអាពាហ៍ពិពាហ៍' + (couple ? ' ' + couple : '');
    let img = url.origin + '/assets/img-812183ca16.png';
    try { const r = await env.ASSETS.fetch(new URL('/og.jpg', url.origin)); if (r.status === 200) img = url.origin + '/og.jpg'; } catch (e) {}

    const meta = '<meta property="og:title" content="' + esc(title) + '"><meta property="og:description" content="' + esc(desc) +
      '"><meta property="og:image" content="' + esc(img) + '"><meta property="og:url" content="' + esc(request.url) +
      '"><meta name="twitter:title" content="' + esc(title) + '"><meta name="twitter:description" content="' + esc(desc) +
      '"><meta name="twitter:image" content="' + esc(img) + '">';
    html = html.replace(/<meta property="og:(?:title|description|image|url)" content="[^"]*">/g, '')
               .replace(/<meta name="twitter:(?:title|description|image)" content="[^"]*">/g, '')
               .replace(/<title>[^<]*<\/title>/, '<title>' + esc(title) + '</title>')
               .replace('<meta name="theme-color"', meta + '<meta name="theme-color"');
    if (short) html = html.replace('<head>', '<head><base href="/"><script>history.replaceState(null,"",' + JSON.stringify('/?to=' + encodeURIComponent(short.n) + '&t=' + short.t).replace(/</g, '\\u003c') + ')</script>');
    const h = new Headers(res.headers); h.delete('content-length'); h.delete('content-encoding'); h.set('cache-control', 'no-cache');
    return new Response(html, { status: 200, headers: h });
  }
};
