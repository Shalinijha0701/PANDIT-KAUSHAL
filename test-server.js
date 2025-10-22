const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('test server ok');
});
server.listen(3000, '127.0.0.1', () => console.log('test server listening on 3000'));
server.on('error', (err) => console.error('server error', err));