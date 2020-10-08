import { normalize, schema } from 'normalizr';
import { makeMongoClient } from '../mongoClient';
import { Ingredients, Pizzas } from '../../shared/entities';

const { Entity } = schema;

const ingredients = new Entity('ingredients', {}, { idAttribute: '_id' });
const pizzas = new Entity('pizzas', { ingredients: [ingredients] }, { idAttribute: '_id' });

export async function pizzaListHandler() {
  const { close, db } = await makeMongoClient();
  const items = await db.collection<Pizzas & {ingredients: Ingredients[]}>('pizzas').aggregate([
    {
      $lookup: {
        from: 'ingredients',
        localField: 'ingredients',
        foreignField: '_id',
        as: 'ingredients',
      },
    },
  ]);
  const arr = await items.toArray();
  close();
  return normalize(arr, [pizzas]);
}
