const userServ = require("../services/authService");

exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await userServ.signUp({
      username,
      email,
      password,
      role: "user",
    });
    res.status(201).json({
      message: "User Register Successfully",
      user: {
        createdAt: result.createdAt,
        email: result.email,
        username: result.username,
        id: result._id,
      },
    });
  } catch (err) {
    if (err.message === "User Already Register" || "Field are empty") {
      return res.status(400).json({
        message: err.message,
      });
    }
    res.status(500).json({ message: "Server Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const userLogin = await userServ.login(req.body);
    res.status(200).json({
      message: "Login Successfully",
      user: userLogin.user,
      token: userLogin.token,
      role: userLogin.existing.role,
    });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

exports.me = async (req, res) => {
  const { id } = req.user;
  try {
    const { email, username, role } = await userServ.me(id);
    res.status(200).json({
      message: "Fetch Successfully",
      user: {
        name: username,
        email: email,
        role: role,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
