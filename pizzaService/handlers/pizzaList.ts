import { makeMongoClient } from '../mongoClient';

export async function pizzaListHandler() {
  const { close, db } = await makeMongoClient();
  const items = await db.collection('pizzas').aggregate([
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
  return arr;
}
