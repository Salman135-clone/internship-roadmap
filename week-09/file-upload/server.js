const express = require("express");
const multer = require("multer");
const fs = require("fs");

const app = express();

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, `${Date.now()} - ${file.originalname}`),
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json({ message: "File upload successfully" });
});

app.listen(3000, () => {
  console.log("Server Link: http://localhost:3000");
});
