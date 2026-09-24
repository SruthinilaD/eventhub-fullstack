const pool = require("../db");

const createEvent = async (eventData) => {
  const {
    organizerId,
    categoryId,
    venueId,
    title,
    description,
    imageUrl,
    startTime,
    endTime,
    price,
  } = eventData;

  const result = await pool.query(
    `
    INSERT INTO events (
      organizer_id,
      category_id,
      venue_id,
      title,
      description,
      image_url,
      start_time,
      end_time,
      price
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *
    `,
    [
      organizerId,
      categoryId,
      venueId,
      title,
      description,
      imageUrl,
      startTime,
      endTime,
      price,
    ]
  );

  return result.rows[0];
};

const getEvents = async () => {
  const result = await pool.query(`
    SELECT
      e.id,
      e.title,
      e.description,
      e.image_url,
      e.start_time,
      e.end_time,
      e.price,
      e.status,

      c.id AS category_id,
      c.name AS category_name,

      v.id AS venue_id,
      v.name AS venue_name,
      v.address AS venue_address,
      v.city AS venue_city,

      u.id AS organizer_id,
      u.name AS organizer_name

    FROM events e

    JOIN event_categories c
      ON e.category_id = c.id

    JOIN venues v
      ON e.venue_id = v.id

    JOIN users u
      ON e.organizer_id = u.id

    ORDER BY e.start_time ASC
  `);

  return result.rows;
};

module.exports = {
  createEvent,
  getEvents,
};