import { getFileData } from "./feedback";

function handler(req, res) {
  const id = req.query.id;
  const data = getFileData();
  const retrieveById = data.find((feedback) => feedback.id === id);

  res.status(200).json({ feedback: retrieveById });
}

export default handler;
