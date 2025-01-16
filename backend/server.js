const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Import Routes
const projectRoutes = require("/Users/ddevv15/Desktop/portfolio/backend/routes/projects");
const achievementRoutes = require("/Users/ddevv15/Desktop/portfolio/backend/routes/achievements");

// Use Routes
app.use("/api/projects", projectRoutes);
app.use("/api/achievements", achievementRoutes);

// Start Server
const PORT = process.env.PORT || 4444;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
