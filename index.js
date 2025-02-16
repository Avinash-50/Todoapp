const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(express.json());

// Corrected route path
const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes);

// Database connection
const dbConnect = require("./config/database");
dbConnect();

// Homepage route
app.get("/", (req, res) => {
  res.send(`<h1>This is homepage</h1>`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});
