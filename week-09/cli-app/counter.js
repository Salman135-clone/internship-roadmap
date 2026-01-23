const fs = require("fs");
const path = require("path");

const pathFile = process.argv[2];

if (!pathFile) {
  console.error("Please provide us the file");

  process.exit(1);
}

const fileAddress = path.resolve(pathFile);

const readData = fs.readFileSync(fileAddress, "utf8");

const clearText = readData.toLowerCase().replace(/[,.\=-]/g, "");

const word = clearText.split(/\s+/);

function counter(text) {
  console.log(text);

  const result = text.reduce((acc, curr) => {
    acc[curr] = (acc[curr] ?? 0) + 1;
    return acc;
  }, {});
}

counter(word);
