import config from '../../../pizzaService/config.json';
import { PizzaListResponse } from '../../../pizzaService/handlers/pizzaList';

const { host, port } = config;

const path = `http://${host}:${port}`;

export function fetchPizzaList(): Promise<PizzaListResponse> {
  return fetch(`${path}/pizzaList`).then((response) => response.json());
}
