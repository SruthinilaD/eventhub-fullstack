const express = require("express");
const cors = require("cors");
const pool = require("./db");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "EventHub backend is running 🚀" });
});

app.get("/api/health", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      status: "OK",
      database: "Connected",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "ERROR",
      database: "Not connected",
    });
  }
});

app.get("/api/categories", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM event_categories ORDER BY id"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch categories",
    });
  }
});

app.post("/api/venues", async (req, res) => {
  try {
    const { name, address, city, capacity } = req.body;

    const result = await pool.query(
      `INSERT INTO venues (name, address, city, capacity)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, address, city, capacity]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create venue",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});