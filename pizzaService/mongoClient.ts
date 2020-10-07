import { MongoClient } from 'mongodb';

const databaseName = 'pizza';
const uri = 'mongodb+srv://admin:admin@pizzaservicegroup.9alot.mongodb.net/PizzaServiceGroup?retryWrites=true&w=majority';

export async function makeMongoClient() {
  const mongoClient = new MongoClient(uri, { useNewUrlParser: true });
  const connect = await mongoClient.connect();
  const db = connect.db(databaseName);
  return { db, close: () => connect.close() };
}
