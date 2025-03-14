"use client";

import React, { useState } from "react";

export default function CurriculumForm() {
  const [topic, setTopic] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [learningObjectives, setLearningObjectives] = useState("");
  const [generatedCurriculum, setGeneratedCurriculum] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/generate-curriculum", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, gradeLevel, duration, learningObjectives }),
    });

    const data = await response.json();
    setGeneratedCurriculum(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        {/* Input Fields */}
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Grade Level"
          value={gradeLevel}
          onChange={(e) => setGradeLevel(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Duration (in weeks)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="form-input"
        />
        <textarea
          placeholder="Learning Objectives"
          value={learningObjectives}
          onChange={(e) => setLearningObjectives(e.target.value)}
          className="form-input"
        />
        {/* Submit Button */}
        <button type="submit" className="form-button">
          Generate Curriculum
        </button>
      </form>

      {/* Render Generated Curriculum */}
      {generatedCurriculum && (
        <div className="response-container">
          <h3>Generated Curriculum</h3>
          <pre>{generatedCurriculum.description}</pre>
        </div>
      )}
    </div>
  );
}
