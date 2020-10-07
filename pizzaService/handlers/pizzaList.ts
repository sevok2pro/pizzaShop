import { makeMongoClient } from '../mongoClient';

export async function pizzaListHandler() {
  const { close, db } = await makeMongoClient();
  const items = await db.collection('pizzas').find({ name: 'Caesar' });
  const arr = await items.toArray();
  close();
  return arr;
}
