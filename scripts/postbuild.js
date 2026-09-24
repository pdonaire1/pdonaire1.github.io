/*
 * Runs automatically after `npm run build` (npm "postbuild" hook).
 *
 * public/index.html is the résumé and is CRA's template, so the React bundle is
 * injected there (harmless: src/index.js only mounts when a #root exists).
 * public/portfolio.html is copied verbatim and references the dev bundle
 * (/static/js/bundle.js); here we swap that for the hashed production files
 * listed in build/asset-manifest.json.
 */
const fs = require('fs');
const path = require('path');

const build = path.join(__dirname, '..', 'build');
const manifest = JSON.parse(fs.readFileSync(path.join(build, 'asset-manifest.json'), 'utf8'));
const page = path.join(build, 'portfolio.html');
let html = fs.readFileSync(page, 'utf8');

const tags = [];
if (manifest['main.css']) tags.push('<link rel="stylesheet" href="' + manifest['main.css'] + '">');
if (manifest['main.js']) tags.push('<script src="' + manifest['main.js'] + '"></script>');

const re = /<!-- app-assets:start -->[\s\S]*?<!-- app-assets:end -->/;
if (!re.test(html)) {
  console.error('postbuild: app-assets markers not found in portfolio.html');
  process.exit(1);
}
html = html.replace(re, tags.join('\n   '));
fs.writeFileSync(page, html);
console.log('postbuild: portfolio.html now loads ' + Object.values(manifest).filter(f => /\.(js|css)$/.test(f)).join(', '));
