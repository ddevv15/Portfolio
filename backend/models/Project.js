const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Project title
  description: { type: String, required: true }, // Brief project description
  technologies: [String], // List of technologies used
  githubLink: String, // Link to GitHub repository
  liveLink: String, // Link to the live project (optional)
  image: String, // URL to an image representing the project
});

module.exports = mongoose.model("Project", projectSchema);
