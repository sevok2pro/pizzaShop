import http from 'http';
import config from './config.json';

const {
  host,
  port,
} = config;

const server = http.createServer(((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');
  // for faster develop, later we need proxy service
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.write(JSON.stringify({ text: 'pong' }));
  res.end();
}));

server.listen(port, host, () => {
  console.log('pizza service start');
});
