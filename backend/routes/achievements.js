const express = require("express");
const Achievement = require("../models/Achievements");
const router = express.Router();

// Get all achievements
router.get("/", async (req, res) => {
  try {
    const achievements = await Achievement.find();
    res.json(achievements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new achievement
router.post("/", async (req, res) => {
  const achievement = new Achievement(req.body);
  try {
    const newAchievement = await achievement.save();
    res.status(201).json(newAchievement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
