import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const data = {
  test: [
    {
      question: "How to declare a variable in JavaScript?",
      answer: [
        {
          answer: "Using dec",
        },
        {
          answer: "Using declare",
        },
        {
          answer: "Using var",
        },
        {
          answer: "Using variable",
        },
      ],
    },
    {
      question: "What does the following code log?",
      answer: [
        {
          answer: "20",
        },
        {
          answer: "x10",
        },
        {
          answer: "'x10'",
        },
        {
          answer: "1010",
        },
      ],
    },
    {
      question: "Which of the following definitions best describes a string?",
      answer: [
        {
          answer: "A sequence of digits",
        },
        {
          answer: "A sequence of emoticons",
        },
        {
          answer: "A sequence of Boolean values",
        },
        {
          answer: "A sequence of textual characters",
        },
      ],
    },
  ],
  another: [
    {
      question: "Which of the following definitions best describes a string?",
      answer: [
        {
          answer: "A sequence of digits",
        },
        {
          answer: "A sequence of emoticons",
        },
        {
          answer: "A sequence of Boolean values",
        },
        {
          answer: "A sequence of textual characters",
        },
      ],
    },
  ],
};

type QuizParams = {
  id: string;
};

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [qIndex, setIndex] = useState(0);
  const { id = "" } = useParams<QuizParams>();

  useEffect(() => {

    if (id in data) {
      setQuizData(data[id]);
    }
  }, [id]);
  return (
    <>
      <h1>Quiz</h1>

      <div>{quizData[qIndex] && quizData[qIndex].question}</div>

        <div>
            <ol>
                {quizData[qIndex] && quizData[qIndex].answer.map(
                  item => (<li key={item.answer}>{item.answer}</li>)
                )}
            </ol>
        </div>
    </>
  );
};

export default Quiz;
