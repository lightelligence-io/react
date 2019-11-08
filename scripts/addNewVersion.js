const fs = require('fs');
const versionsFile = 'gh-pages/versions.json';
const version = require('../package.json').version;

let versions;
try {
  versions = JSON.parse(fs.readFileSync(versionsFile, 'utf8'));
} catch {
  versions = [];
}

const versionExists = versions.includes(version);
const newVersions = !versionExists ? versions.concat(version) : versions;
fs.writeFileSync(versionsFile, JSON.stringify(newVersions));
