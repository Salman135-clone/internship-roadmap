const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Node.js Core Modules!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
