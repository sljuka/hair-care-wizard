export type QuestionOption = {
  display: string;
  value: boolean | string;
  isRejection: boolean;
};

export type Question = {
  question: string;
  type: "ChoiceType";
  options: QuestionOption[];
};

export type Quiz = {
  questions: Question[];
};
