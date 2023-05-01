import fs from "fs";
import path from "path";

export function getFileData() {
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  const parsedFileData = JSON.parse(fileData);
  return parsedFileData;
}

function handler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    const data = getFileData();
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(parsedFileData));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    const data = getFileData();
    res.status(200).json({ feedback: data });
  }
}

export default handler;
