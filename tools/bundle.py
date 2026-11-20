#!/usr/bin/env python3
"""
bundle.py — ភ្ជាប់ឯកសារ HTML/CSS/JS ទាំងអស់ ចេញជា dist/index.html (លឿនជាង សម្រាប់ upload ឡើង hosting)
  python tools/bundle.py            → dist/index.html + dist/assets/ (+ ឯកសារ hosting)
  python tools/bundle.py --single   → dist/my-theab-all-in-one.html (ឯកសារតែមួយ បើក double-click បាន)
"""
import re, os, sys, shutil, base64, mimetypes
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, 'dist')
single = '--single' in sys.argv
rd = lambda p: open(os.path.join(ROOT, p), encoding='utf-8').read()

def split(txt, kind):
    rx = re.compile(r'^/\* ═+ \[(\d+)\] .*? ═+ \*/\n' if kind == 'css' else r'^// ═+ \[(\d+)\] .*\n', re.M)
    parts, last, start = {}, None, 0
    for m in rx.finditer(txt):
        if last is not None: parts[last] = txt[start:m.start() - 1]
        last, start = m.group(1), m.end()
    if last is not None: parts[last] = txt[start:len(txt) - 1]
    return parts

def template(name):
    b = f'templates/{name}/'
    css, js = split(rd(b + 'style.css'), 'css'), split(rd(b + 'script.js'), 'js')
    h = re.sub(r'/\*@(css|js) (\d+)\*/', lambda m: (css if m.group(1) == 'css' else js)[m.group(2)], rd(b + 'template.html'))
    return h.replace('</script>', '<\\/script>')

h = rd('index.html')
h = h.replace('<script src="js/template-loader.js"></script>\n', '')
h = re.sub(r'<script>MTL\.write\("(\w+)","(\w+)"\)</script>',
           lambda m: '<script type="text/plain" id="%s">%s</script>' % (m.group(2), template(m.group(1))), h)
h = re.sub(r'<link rel="stylesheet" href="(css/[\w\-]+\.css)">', lambda m: '<style>\n' + rd(m.group(1)) + '</style>', h)
h = re.sub(r'<script src="(js/[\w\-]+\.js)"></script>', lambda m: '<script>\n' + rd(m.group(1)) + '</script>', h)

if os.path.exists(DIST): shutil.rmtree(DIST)
os.makedirs(DIST)
if single:
    def vid(m):   # វីដេអូក្នុង #vdata ត្រូវជា base64 ឆៅ
        return m.group(1) + base64.b64encode(open(os.path.join(ROOT, m.group(2)), 'rb').read()).decode()
    h = re.sub(r'(id="vdata">)(assets/[\w\-.]+)', vid, h)
    def data(m):
        p = m.group(0); mt = mimetypes.guess_type(p)[0] or 'application/octet-stream'
        if p.endswith('.m4a'): mt = 'audio/mp4'
        return 'data:%s;base64,%s' % (mt, base64.b64encode(open(os.path.join(ROOT, p), 'rb').read()).decode())
    h = re.sub(r'assets/[\w\-]+\.(?:jpg|png|webp|gif|m4a|mp3|mp4|svg)', data, h)
    out = 'my-theab-all-in-one.html'
else:
    shutil.copytree(os.path.join(ROOT, 'assets'), os.path.join(DIST, 'assets'))
    for f in ['favicon.svg', '404.html', '_headers', '_worker.js', 'vercel.json', '.htaccess']:
        if os.path.exists(os.path.join(ROOT, f)): shutil.copy(os.path.join(ROOT, f), DIST)
    out = 'index.html'
open(os.path.join(DIST, out), 'w', encoding='utf-8').write(h)
print('✔ បានបង្កើត dist/%s (%d KB)' % (out, len(h.encode()) // 1024))
