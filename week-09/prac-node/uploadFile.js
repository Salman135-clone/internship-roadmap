const http = require("http");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const UPLOAD_DIR = path.join(__dirname, "uploads");
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/upload") {
    upload.single("file")(req, res, (err) => {
      if (err) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify({ error: err.message }));
      }
      console.log(req.file);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Uploaded Successfully" }));
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h2>Upload a File</h2>
  <form action="/upload" method="POST" enctype="multipart/form-data">
    <label for="file">Choose a file:</label>
    <input type="file" id="file" name="file"  required>
    <br><br>
    <button type="submit">Upload</button>
  </form>
    `);
  }
});

server.listen(3000, () => {
  console.log("Server port is 3000");
});
