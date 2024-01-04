"use client";

import React, { useEffect } from "react";
import { Quiz as QuizType } from "../types";
import { QuizQuiestion } from "./quizQuestion";
import { QuizResult } from "./quizResult";

export const Quiz = ({ questions }: QuizType) => {
  const [answers, setAnsers] = React.useState<Record<string, string>>({});
  const [activeStep, setActiveStep] = React.useState(0);

  const submitAnswer = (question: string, answer: string) => {
    setAnsers((previous) => ({ ...previous, [question]: answer }));
    setActiveStep((prev) => prev + 1);
  };

  const goBack = () => {
    setActiveStep((p) => Math.max(0, p - 1));
  };

  useEffect(() => {
    document.getElementById("quiz-container")?.focus();
  }, []);

  const stepMap = React.useMemo(
    () =>
      questions.reduce<Record<number, string>>((acc, questionData, index) => {
        return { ...acc, [index]: questionData.question };
      }, {}),
    [questions]
  );

  if (questions.length === 0)
    return <div>Quiz not ready yet. Please come back later!</div>;

  if (Object.keys(answers).length >= questions.length)
    return <QuizResult questions={questions} answers={answers} />;

  return (
    <div id="quiz-container" tabIndex={0}>
      {questions.map((questionData) => (
        <QuizQuiestion
          {...questionData}
          key={questionData.question}
          isStepActive={stepMap[activeStep] === questionData.question}
          onSubmit={submitAnswer}
          goBack={goBack}
          showBack={activeStep > 0}
        />
      ))}
    </div>
  );
};
