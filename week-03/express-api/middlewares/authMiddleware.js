const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config();

const JWT_SECERT = process.env.JWT_SECRET_KEY;

exports.protect = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      message: "Not authorized, token missing",
    });
  }
  try {
    const userInfo = jwt.verify(token, JWT_SECERT);

    req.user = userInfo;

    // console.log("userInfo:", userInfo);
    // console.log("req.user:", req.user.id);

    next();
  } catch (err) {
    return res.status(401).json({ message: "Not authorized, token invalid" });
  }
};
