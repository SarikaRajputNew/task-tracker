const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// PostgreSQL pool without username/password (default local setup)
const pool = new Pool({
  host: "localhost",
  database: "task_tracker",
  port: 5432,
  // no user or password fields
});

app.get("/tasks", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks ORDER BY id");
    res.json(result.rows);
  } catch (error) {
    console.error("DB query error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
