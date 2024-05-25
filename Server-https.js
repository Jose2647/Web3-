/*
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

// auladedominio.site

const hostname = "auladedominio.site";

const options = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
};
const app = express();

// Configure o servidor HTTPS com suas opções existentes
const server = https.createServer(options, app);

// Defina o diretório que contém os arquivos do seu site (HTML, CSS, JS)
const staticPath = path.join(__dirname, 'public');

// Sirva arquivos estáticos do diretório 'public'
app.use(express.static(staticPath));

// (Opcional) Rota para um caminho específico (por exemplo, página inicial)
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: staticPath }); // Sirva index.html de 'public'

  console.log('sever running');
});


//const hostname = '0.0.0.0'; // Certifique-se de ouvir em '0.0.0.0' para aceitar conexões externas
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Servidor em execução em https://${hostname}:${port}/`);
});

app.use((req, res, next) => {
  console.log(`Requisição recebida: ${req.method} ${req.url}`);
  next();
});
app.use(express.static(staticPath, (req, res, next) => {
  console.log(`Arquivo estático servido: ${req.path}`);
  next();
}));
app.get('/', (req, res) => {
  console.log('Rota principal acessada');
  res.sendFile('index.html', { root: staticPath }); // Sirva index.html de 'public'
});
app.use((err, req, res, next) => {
  console.error(`Erro: ${err.message}`);
  res.status(500).send('Erro interno do servidor.');
});
*/

const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Seu domínio
const hostname = "auladedominio.site";

const options = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
};

const app = express();

// Configure o servidor HTTPS com suas opções existentes
const server = https.createServer(options, app);

// Defina o diretório que contém os arquivos do seu site (HTML, CSS, JS)
const staticPath = path.join(__dirname, 'public');

// Sirva arquivos estáticos do diretório 'public'
app.use(express.static(staticPath));

// (Opcional) Rota para um caminho específico (por exemplo, página inicial)
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: staticPath }); // Sirva index.html de 'public'
  console.log('Server running');
});

const port = 3000;

// Escute em todas as interfaces disponíveis
server.listen(port, '0.0.0.0', () => {
  console.log(`Servidor em execução em https://${hostname}:${port}/`);
}).on('error', (err) => {
  console.error('Erro ao iniciar o servidor:', err);
});

app.use((req, res, next) => {
  console.log(`Requisição recebida: ${req.method} ${req.url}`);
  next();
});

app.use(express.static(staticPath, (req, res, next) => {
  console.log(`Arquivo estático servido: ${req.path}`);
  next();
}));

app.use((err, req, res, next) => {
  console.error(`Erro: ${err.message}`);
  res.status(500).send('Erro interno do servidor.');
});
