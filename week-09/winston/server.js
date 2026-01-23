const express = require("express");
const logger = require("./logger");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  logger.info(`Login attempt for user: ${username}`);

  if (!username || !password) {
    logger.warn("Login failed: Missing credentials");
    return res.status(400).json({ error: "Missing credentials" });
  }
  if (username === "myuser" && password === "mypassword") {
    logger.info(`User logged in successfully: ${username}`);
    res.json({ success: true, user: username });
  } else {
    logger.error(`Wrong credentials`);
    res.json({ message: "Invalid Credentials" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
