import React, { useState, useEffect } from "react";
import API from "../api";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await API.get("/achievements"); // API endpoint for achievements
        setAchievements(response.data);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <div>
      <h1>Achievements</h1>
      <ul>
        {achievements.map((achievement) => (
          <li key={achievement._id}>
            <h2>{achievement.title}</h2>
            <p>{achievement.description}</p>
            <p>Date: {new Date(achievement.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
