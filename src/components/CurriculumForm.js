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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Grade Level"
        value={gradeLevel}
        onChange={(e) => setGradeLevel(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Duration (in weeks)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="p-2 border rounded"
      />
      <textarea
        placeholder="Learning Objectives"
        value={learningObjectives}
        onChange={(e) => setLearningObjectives(e.target.value)}
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Generate Curriculum
      </button>
      {generatedCurriculum && (
        <div className="answer-container">
          <h3 className="font-bold text-lg">Generated Curriculum</h3>
          <div>
            {generatedCurriculum.description
              .split("Week")
              .map((section, index) => (
                <div key={index}>
                  {index > 0 && (
                    <h4 className="font-bold text-lg">Week {index}:</h4>
                  )}
                  <p>{section.trim()}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </form>
  );
}
