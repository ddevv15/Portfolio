const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Achievement title
  description: { type: String, required: true }, // Brief achievement description
  date: { type: Date, required: true }, // Date of the achievement
});

module.exports = mongoose.model("Achievement", achievementSchema);
