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
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGenerateButton, setIsLoadingGenerateButton] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoadingGenerateButton(true);
    e.preventDefault();

    const response = await fetch("/api/generate-curriculum", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, gradeLevel, duration, learningObjectives }),
    });

    const data = await response.json();
    setGeneratedCurriculum(data);
    setIsLoadingGenerateButton(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        {/* Input Fields */}
        <Input
          className="m-2 border-gray-300 rounded-3xl"
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Input
          className="m-2 border-gray-300 rounded-3xl"
          type="text"
          placeholder="Grade Level"
          value={gradeLevel}
          onChange={(e) => setGradeLevel(e.target.value)}
        />
        <Input
          className="m-2 border-gray-300 rounded-3xl"
          type="number"
          placeholder="Duration (in weeks)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <Textarea
          className="m-2 border-gray-300 rounded-3xl"
          placeholder="Learning Objectives"
          value={learningObjectives}
          onChange={(e) => setLearningObjectives(e.target.value)}
        />
        {/* Submit Button */}
        <Button
          type="submit"
          isLoading={isLoadingGenerateButton}
          className="form-button m-2"
        >
          {isLoadingGenerateButton ? "Generating ..." : "Generate Curriculum"}
        </Button>
      </form>

      {/* Render Generated Curriculum */}
      {generatedCurriculum && (
        <div className="response-container m-2">
          <h3>Here is your Curriculum</h3>
          <div className="prose">
            <ReactMarkdown>{generatedCurriculum.description}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
