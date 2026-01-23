const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a file path as an argument.");
  process.exit(1);
}

const filePathLink = path.resolve(filePath);

async function message(file) {
  const data = fs.readFileSync(file, "utf8");
  console.log(data);
}

message(filePathLink);
