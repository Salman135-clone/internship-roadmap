const http = require("http");
const fs = require("fs");
const path = require("path");
const user = require("./json/user.json");
const port = 3000;

const UPLOAD_DIR = path.join(__dirname, "uploads");
console.log(UPLOAD_DIR);

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

const server = http.createServer((req, res) => {
  console.log(`Req: ${req.method} & Url: ${req.url}`);

  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "application/json" });

      res.end(JSON.stringify({ message: "This is the root endpoint" }));
    } else if (req.url === "/users") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "User list retrieved", data: user }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Endpoint not found" }));
    }
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
