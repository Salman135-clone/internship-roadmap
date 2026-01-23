const fs = require("fs");

const stream = fs.createReadStream("file.txt", {
  encoding: "utf8",
  highWaterMark: 64 * 1024,
});

stream.on("data", (chunk) => {
  console.log("Chunk", chunk);
});

const writeStream = fs.createWriteStream("output.txt");
writeStream.write("GG\n");
writeStream.write("This is Node.js Streams\n");
writeStream.end();

writeStream.on("finish", () => {
  console.log("Write End...");

  const appendStream = fs.createWriteStream("output.txt", { flags: "a" });
  appendStream.write("Another line entrys\n");
  appendStream.end();

  appendStream.on("finish", () => {
    console.log("Append done");

    fs.readFile("output.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("Final file content:\n", data);
    });

    const readable = fs.createReadStream("output.txt", "utf8");

    const writeable = fs.createWriteStream("trans.txt");

    readable.pipe(writeable);

    writeable.on("finish", () => {
      console.log("File Copied Complete");
    });
  });
});
