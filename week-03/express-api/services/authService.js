const user = require("../models/userModal");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const env = require("dotenv");

env.config();

const JWT_SECERT = process.env.JWT_SECRET_KEY;

exports.signUp = async (data) => {
  const { email, password, username, role } = data;

  const existing = await user.findOne({ email });

  if (!email || !password || !username) {
    throw new Error("Field are empty");
  }

  if (existing) {
    throw new Error("User Already Register");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const saveUser = await user.create({
    username,
    email,
    password: hashPassword,
    role,
  });

  return saveUser;
};

exports.login = async (data) => {
  const { email, password } = data;

  const existing = await user.findOne({ email });

  if (!existing) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, existing.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ id: existing._id }, JWT_SECERT, { expiresIn: "1d" });

  return { token, existing };
};

exports.me = async (id) => {
  const findUser = await user.findById(id);

  if (!findUser) {
    throw new Error("Fail to fetch user detail");
  }
  return findUser;
};
