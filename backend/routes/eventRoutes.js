const express = require("express");

const {
  createEventController,
  getEventsController,
} = require("../controllers/eventController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Organizer only
router.post(
  "/",
  authMiddleware,
  roleMiddleware("ORGANIZER"),
  createEventController
);

// Public
router.get(
  "/",
  getEventsController
);

module.exports = router;