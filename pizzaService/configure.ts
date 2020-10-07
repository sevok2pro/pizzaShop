import { makeMongoClient } from './mongoClient';

const staticCollections = ['ingredients', 'pizzas', 'test'];

export async function configure() {
  const { db, close } = await makeMongoClient();
  const collections = await db.collections();
  const collectionsHash = collections.reduce(
    (acc, next) => ({ ...acc, [next.collectionName]: true }), {},
  );
  await Promise.all(
    staticCollections
      .filter((next) => !collectionsHash[next])
      .map((next) => db.createCollection(next)),
  );
  await close();
}
