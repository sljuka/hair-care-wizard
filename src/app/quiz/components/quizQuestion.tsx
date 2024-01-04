import React, { FormEvent, FormEventHandler } from "react";
import { Question } from "../types";
import { QuizOption } from "./quizOption";
import { Button } from "@/components/Button";

type Props = Question & {
  isStepActive: boolean;
  onSubmit: (question: string, value: string) => void;
  goBack: () => void;
  value?: string;
  showBack: boolean;
};

export const QuizQuiestion = ({
  isStepActive,
  question,
  options,
  value,
  onSubmit,
  goBack,
  showBack,
}: Props) => {
  const [selectedValue, setSelectedValue] = React.useState(value);

  if (!isStepActive) return null;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedValue) return;

    onSubmit(question, selectedValue);
  };

  return (
    <form onSubmit={submit}>
      <main className="flex flex-col items-center justify-center gap-6 min-h-screen p-16">
        <h1 className="text-2xl">{question}</h1>
        {options.map((option, index) => (
          <QuizOption
            key={index}
            {...option}
            onChange={setSelectedValue}
            selectedValue={selectedValue}
          />
        ))}

        <div className="flex gap-2">
          <Button type="submit" disabled={!selectedValue}>
            Submit
          </Button>
          {showBack && (
            <Button type="button" variant="secondary" onClick={goBack}>
              Back
            </Button>
          )}
        </div>
      </main>
    </form>
  );
};
