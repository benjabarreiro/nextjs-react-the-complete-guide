import { MongoClient } from "mongodb";
import { connectDB, insertDocument } from "../../../helpers/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    let client;
    try {
      client = await connectDB();
    } catch (err) {
      res.status(500).json({ message: "Connecting to DB failed!" });
      return;
    }

    try {
      await insertDocument(client, "comments", { email, name, text, eventId });
      client.close();
    } catch (err) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Comment created!" });
  }
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://gandalf:6anda1f!98@cluster0.uarebit.mongodb.net/events?retryWrites=true&w=majority"
    );
    const db = await client.db();

    const comments = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    client.close();

    res.status(200).json({ comments });
  }
}

export default handler;
