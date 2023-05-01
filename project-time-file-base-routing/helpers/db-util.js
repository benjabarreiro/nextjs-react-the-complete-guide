import { MongoClient } from "mongodb";

export async function connectDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://gandalf:6anda1f!98@cluster0.uarebit.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = await client.db();

  const data = await db.collection(collection).insertOne(document);

  return data;
}

export async function getAllDocuments(client, collection, sort) {
  const db = await client.db();

  const data = await db.collection(collection).find().sort(sort).toArray();
  return data;
}
