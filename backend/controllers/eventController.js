const {
  createEvent,
  getEvents,
} = require("../services/eventService");

const createEventController = async (req, res) => {
  try {
    const {
      categoryId,
      venueId,
      title,
      description,
      imageUrl,
      startTime,
      endTime,
      price,
    } = req.body;

    if (
      !categoryId ||
      !venueId ||
      !title ||
      !startTime ||
      !endTime ||
      price === undefined
    ) {
      return res.status(400).json({
        message:
          "Category, venue, title, start time, end time and price are required",
      });
    }

    const organizerId = req.user.id;

    const event = await createEvent({
      organizerId,
      categoryId,
      venueId,
      title,
      description,
      imageUrl,
      startTime,
      endTime,
      price,
    });

    res.status(201).json({
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    console.error("Create event error:", error);

    res.status(500).json({
      message: "Failed to create event",
    });
  }
};

const getEventsController = async (req, res) => {
  try {
    const events = await getEvents();

    res.status(200).json({
      events,
    });
  } catch (error) {
    console.error("Get events error:", error);

    res.status(500).json({
      message: "Failed to fetch events",
    });
  }
};

module.exports = {
  createEventController,
  getEventsController,
};