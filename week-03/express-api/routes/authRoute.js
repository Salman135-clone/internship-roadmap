const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const validate = require("../middlewares/validation/validate");
const {
  signupSchema,
  loginSchema,
} = require("../middlewares/validation/authValidate");
const { protect } = require("../middlewares/authMiddleware");

router.post("/signup", validate(signupSchema), authController.signUp);

router.post("/login", validate(loginSchema), authController.login);

router.get("/me", protect, authController.me);

module.exports = router;
