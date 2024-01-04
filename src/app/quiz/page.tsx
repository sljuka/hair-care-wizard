import { Quiz } from "./components/quiz";
import { Quiz as QuizType } from "./types";

async function getQuizData(): Promise<QuizType> {
  const res = await fetch(
    "https://manual-case-study.herokuapp.com/questionnaires/972423.json"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const QuizPage = async () => {
  const data = await getQuizData();

  return <Quiz {...data} />;
};

export default QuizPage;
