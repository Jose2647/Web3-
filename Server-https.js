const https = require('https');
const fs = require('fs');
const path = require('path');

// auladedominio.site

//const hostname = "auladedominio.site";

const options = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
};

const hostname = '0.0.0.0'; // Certifique-se de ouvir em '0.0.0.0' para aceitar conexões externas
const port = 3000;

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello, Secure World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});
