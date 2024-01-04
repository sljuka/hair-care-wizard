import React, { useMemo } from "react";
import { QuestionOption } from "../types";

type Props = {
  onChange: (value: string) => void;
  selectedValue: string | undefined;
} & QuestionOption;

export const QuizOption = ({
  value,
  selectedValue,
  onChange,
  display,
}: Props) => {
  const stringyValue = value.toString();
  const name = `option-${stringyValue}`;

  const innerHTML = useMemo(() => ({ __html: display }), [display]);

  return (
    <div className="flex mb-4 justify-center items-center">
      <input
        id={name}
        type="radio"
        checked={selectedValue !== undefined && stringyValue === selectedValue}
        value={stringyValue}
        onChange={() => onChange(stringyValue)}
        name={name}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={name}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        <div dangerouslySetInnerHTML={innerHTML} />
      </label>
    </div>
  );
};
