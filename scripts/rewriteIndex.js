const fs = require('fs');
const indexFile = 'gh-pages/index.html';
const version = require('../package.json').version;

const indexSrc = (latestVersion) =>
  `
  <!DOCTYPE HTML>
  <html lang="en-US">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="refresh" content="0; url=releases/${latestVersion}">
          <script type="text/javascript">
              window.location.href = "releases/${latestVersion}"
          </script>
          <title>Page Redirection</title>
      </head>
      <body>
          If you are not redirected automatically, follow this <a href='releases/${latestVersion}'>link to example</a>.
      </body>
  </html>
`;

fs.writeFileSync(indexFile, indexSrc(version));
