const signupService = require("../services/authService");

exports.signup = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const existing = await signupService.findUserByEmail(email);

    if (existing) {
      return res.status(409).json({ message: "User already exists" });
    }

    const createUser = await signupService.signup(email, name);
    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
