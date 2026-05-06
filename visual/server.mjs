import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

function send(res, status, body, type) {
  res.writeHead(status, { 'Content-Type': type || 'text/plain' });
  res.end(body);
}

function serveFile(res, filePath) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    return send(res, 404, 'Not found');
  }
  const ext = path.extname(filePath);
  send(res, 200, fs.readFileSync(filePath), MIME[ext] || 'application/octet-stream');
}

const stories = {
  button: `import { Button } from '/src/components/Button.js';
import { Stack } from '/src/components/Stack.js';
import { bootstrap } from '/node_modules/@granularjs/core/dist/granular.min.js';
bootstrap(
  Stack(
    Button('Default'),
    Button({ variant: 'outline' }, 'Outline'),
    Button({ variant: 'subtle' }, 'Subtle'),
    Button({ color: 'success' }, 'Success'),
    Button({ color: 'error' }, 'Danger'),
    Button({ size: 'xs' }, 'XS'),
    Button({ size: 'lg' }, 'LG'),
    Button({ disabled: true }, 'Disabled'),
    Button({ loading: true }, 'Loading'),
  ),
  document.getElementById('app'),
);`,
  inputs: `import { TextInput } from '/src/components/TextInput.js';
import { Checkbox } from '/src/components/Checkbox.js';
import { Switch } from '/src/components/Switch.js';
import { Stack } from '/src/components/Stack.js';
import { bootstrap } from '/node_modules/@granularjs/core/dist/granular.min.js';
bootstrap(
  Stack(
    TextInput({ label: 'Name', placeholder: 'Type your name' }),
    Checkbox({ label: 'Subscribe' }),
    Switch({ label: 'Notifications' }),
  ),
  document.getElementById('app'),
);`,
  cards: `import { Card } from '/src/components/Card.js';
import { Title } from '/src/components/Title.js';
import { Text } from '/src/components/Text.js';
import { Stack } from '/src/components/Stack.js';
import { bootstrap } from '/node_modules/@granularjs/core/dist/granular.min.js';
bootstrap(
  Stack(
    Card(Title({ order: 3 }, 'Card title'), Text('Card body content.')),
    Card(Title({ order: 4 }, 'Smaller'), Text('Another card.')),
  ),
  document.getElementById('app'),
);`,
};

function pageHtml(name) {
  if (!stories[name]) return null;
  return `<!doctype html>
<html><head><meta charset="utf-8"><title>${name}</title>
<link rel="stylesheet" href="/dist/granular-ui.min.css"></head>
<body style="margin:0;padding:24px;background:#fff;font-family:system-ui">
<div id="app"></div>
<script type="module">${stories[name]}</script>
</body></html>`;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const pathname = url.pathname;
  if (pathname === '/' || pathname === '/index.html') {
    return send(res, 200, `<ul>${Object.keys(stories).map((s) => `<li><a href="/story/${s}">${s}</a></li>`).join('')}</ul>`, 'text/html');
  }
  if (pathname.startsWith('/story/')) {
    const name = pathname.slice('/story/'.length);
    const html = pageHtml(name);
    if (!html) return send(res, 404, 'No such story');
    return send(res, 200, html, 'text/html');
  }
  const filePath = path.join(root, pathname);
  if (!filePath.startsWith(root)) return send(res, 403, 'Forbidden');
  serveFile(res, filePath);
});

const port = process.env.PORT || 5183;
server.listen(port, () => {
  console.log(`Visual server listening on http://localhost:${port}`);
});
