/* ═══════════════════════════════════════════════════════════════
   template-loader.js — ភ្ជាប់ម៉ូតសំបុត្រ (template.html + style.css + script.js)
   ត្រឡប់ជាអត្ថបទតែមួយ រួចដាក់ក្នុង <script type="text/plain" id="inv|inv2|inv3">
   ដូចដើមបេះបិទ ដូច្នេះកូដ Editor មិនត្រូវកែអ្វីទេ។
   ត្រូវការ http(s):// (hosting ឬ Live Server) — មិនដំណើរការពេល double-click (file://)
   ═══════════════════════════════════════════════════════════════ */
(function (g) {
  function get(url) {
    var x = new XMLHttpRequest();
    x.open('GET', url, false);               /* synchronous: ដើម្បីរក្សាលំដាប់ដំណើរការដូចដើម */
    x.send();
    if (x.status !== 200 && x.status !== 0) throw new Error('មិនអាចផ្ទុក ' + url + ' (' + x.status + ')');
    return x.responseText;
  }
  /* បំបែកឯកសារ style.css / script.js តាមបន្ទាត់ ═══════ [n] ═══════ */
  function split(txt, kind) {
    var rx = kind === 'css' ? /^\/\* ═+ \[(\d+)\] .*? ═+ \*\/\n/gm : /^\/\/ ═+ \[(\d+)\] .*\n/gm;
    var parts = {}, m, last = null, from = 0;
    while ((m = rx.exec(txt))) {
      if (last !== null) parts[last] = txt.slice(from, m.index - 1);
      last = m[1]; from = rx.lastIndex;
    }
    if (last !== null) parts[last] = txt.slice(from, txt.length - 1);
    return parts;
  }
  function build(name) {
    var base = 'templates/' + name + '/';
    var skel = get(base + 'template.html');
    var css = split(get(base + 'style.css'), 'css');
    var js = split(get(base + 'script.js'), 'js');
    var html = skel.replace(/\/\*@(css|js) (\d+)\*\//g, function (m, k, n) {
      var v = (k === 'css' ? css : js)[n];
      if (v === undefined) throw new Error(name + ': ខ្វះផ្នែក ' + k + ' [' + n + ']');
      return v;
    });
    return html.replace(/<\/script>/g, '<\\/script>');   /* ដូចទម្រង់ដើមក្នុង text/plain */
  }
  g.MTL = {
    build: build,
    write: function (name, id) {
      document.write('<script type="text/plain" id="' + id + '">' + build(name) + '</script>');
    }
  };
})(window);
