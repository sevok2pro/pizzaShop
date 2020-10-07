import config from '../../../pizzaService/config.json';

const { host, port } = config;

const path = `http://${host}:${port}`;

export function fetchPizzaList() {
  return fetch(`${path}/pizzaList`).then((response) => response.json());
}
