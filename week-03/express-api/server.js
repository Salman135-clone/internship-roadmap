const express = require("express");
const mongoose = require("mongoose");
const expressWinston = require("express-winston");
const winston = require("winston");
const requestLogger = require("./requestLogger");
const cors = require("cors");

const productRoute = require("./routes/productRoute");
const authRoute = require("./routes/authRoute");

const env = require("dotenv");
const app = express();
env.config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(requestLogger);

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGODB_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((err) => console.log(err));

app.use("/api", productRoute);
app.use("/api", authRoute);

app.listen(PORT, () => {
  console.log("Server using port", PORT);
});
