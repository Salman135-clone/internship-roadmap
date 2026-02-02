const express = require("express");
const env = require("dotenv");
const auth = require("./routes/authRoute");

const app = express();

env.config();
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use("/api", auth);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up",
  });
});

app.listen(PORT, () => {
  console.log(`Running URL: http://localhost:${PORT}`);
});
