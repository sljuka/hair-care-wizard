"use client";

import React from "react";
import { Quiz } from "./quiz";
import { Quiz as QuizType } from "../types";

export const QuizButton = (props: QuizType) => {
  const [quizActive, setQuizActive] = React.useState(false);

  return (
    <>
      {quizActive && (
        <div className="w-screen h-screen fixed bg-white z-10 top-0 left-0 overflow-auto">
          <Quiz {...props} />
        </div>
      )}
      <button
        onClick={() => setQuizActive(true)}
        className="tracking-wider text-sm px-5 py-3 text-white bg-sonAccent rounded-lg hover:opacity-80 active:shadow-lg uppercase"
      >
        Take the quiz
      </button>
    </>
  );
};
