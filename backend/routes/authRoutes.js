const express = require("express");

const {
  registerCustomer,
  registerOrganizer,
  login,
  getMe
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerCustomer);

router.post("/register-organizer", registerOrganizer);

router.post("/login", login);

router.get("/me", authMiddleware, getMe);

module.exports = router;