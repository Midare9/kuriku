"use client";

import { Button, Input, Textarea } from "@heroui/react";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

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
        <div className="space-y-2">
          {/* Input Fields */}
          <Input
            type="text"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Grade Level"
            value={gradeLevel}
            onChange={(e) => setGradeLevel(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Duration (in weeks)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <Textarea
            placeholder="Learning Objectives"
            value={learningObjectives}
            onChange={(e) => setLearningObjectives(e.target.value)}
          />
          {/* Submit Button */}
          <Button type="submit" color="primary" className="form-button">
            Generate
          </Button>
        </div>
      </form>

      {/* Render Generated Curriculum */}
      {generatedCurriculum && (
        <div className="response-container">
          <h3>Generated Curriculum</h3>
          <div className="prose">
            <ReactMarkdown>{generatedCurriculum.description}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
