import Link from "next/link";
import { Question } from "../types";

type Props = {
  questions: Question[];
  answers: Record<string, string>;
};

const calculateResult = ({ questions, answers }: Props) => {
  const isRejection = questions.some((questionData) => {
    const answer = answers[questionData.question];

    return questionData.options.find((x) => x.value.toString() === answer)
      ?.isRejection;
  });

  return isRejection;
};

export const QuizResult = (props: Props) => {
  const isRejection = calculateResult(props);

  return (
    <main className="flex flex-col items-center justify-center gap-6 min-h-screen p-16">
      {isRejection ? <Rejection /> : <Success />}
    </main>
  );
};

const Success = () => (
  <h1 className="text-2xl text-center">
    Great news! We have the perfect treatment for your hair loss. Proceed to{" "}
    <Link
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      href="https://www.manual.co"
    >
      www.manual.co
    </Link>
    , and prepare to say hello to your new hair!
  </h1>
);

const Rejection = () => (
  <h1 className="text-2xl text-center">
    Unfortunately, we are unable to prescribe this medication for you. This is
    because finasteride can alter the PSA levels, which maybe used to monitor
    for cancer. You should discuss this further with your GP or specialist if
    you would still like this medication.{" "}
    <Link
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      href="/"
    >
      Back to site
    </Link>
  </h1>
);
