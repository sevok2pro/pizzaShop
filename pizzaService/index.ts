import http from 'http';
import config from './config.json';
import { configure } from './configure';
import { pizzaListHandler } from './handlers/pizzaList';

const handlersMap = {
  '/pizzaList': pizzaListHandler,
};

function startServer() {
  const {
    host,
    port,
  } = config;

  const server = http.createServer((async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    // for faster develop, later we need proxy service
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (handlersMap[req.url]) {
      const body = await handlersMap[req.url]();
      res.write(JSON.stringify(body));
    }
    res.end();
  }));

  server.listen(port, host, () => {
    console.log('pizza service start');
  });
}

(async () => {
  await configure();
  startServer();
})();
