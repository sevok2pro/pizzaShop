import http from 'http';
import config from './config.json';
import { createUser } from './handlers/auth';

const handlersMap = {
  '/auth/createUser': createUser,
};

function startServer() {
  const {
    host,
    port,
  } = config;

  const server = http.createServer((async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');

    const { url, on } = req;
    on('data', (data) => {
      console.log(data);
    });
    on('end', () => {
      res.end();
    });
  }));

  server.listen(port, host, () => {
    console.log('entry point start start');
  });
}

startServer();
