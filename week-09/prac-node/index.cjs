const { readFileSync, readFile } = require("fs");
const { readFile: _readFile } = require("fs/promises");

async function main() {
  console.log("Before Running");

  const res = readFileSync("file.txt", "utf8");
  console.log("Block Response: ", res);

  readFile("file.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Data: ", data);
  });

  const result = await _readFile("file.txt", "utf-8");
  console.log("Promise result: ", result);

  console.log("Ending...");
}
main();
