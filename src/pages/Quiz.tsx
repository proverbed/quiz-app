import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { GrPrevious, GrNext } from "react-icons/gr";
import ProgressBar from "../components/ProgressBar";

const data = {
  test: {
    info: {
      name: "JavaScript Basics",
    },
    quiz: [
      {
        question: "How to declare a variable in JavaScript?",
        answer: [
          {
            answer: "Using dec",
            correct: false,
            selected: false,
          },
          {
            answer: "Using declare",
            correct: false,
            selected: false,
          },
          {
            answer: "Using var",
            correct: true,
            selected: false,
          },
          {
            answer: "Using variable",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question: "What does the following code log?",
        answer: [
          {
            answer: "20",
            correct: false,
            selected: false,
          },
          {
            answer: "x10",
            correct: false,
            selected: false,
          },
          {
            answer: "'x10'",
            correct: false,
            selected: false,
          },
          {
            answer: "1010",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question: "Which of the following definitions best describes a string?",
        answer: [
          {
            answer: "A sequence of digits",

            correct: false,
            selected: false,
          },
          {
            answer: "A sequence of emoticons",
            correct: false,
            selected: false,
          },
          {
            answer: "A sequence of Boolean values",
            correct: false,
            selected: false,
          },
          {
            answer: "A sequence of textual characters",
            correct: true,
            selected: false,
          },
        ],
      },
      {
        question: "Which of the following values denotes a string?",
        answer: [
          {
            answer: "\\'Hello\\'",
            correct: false,
            selected: false,
          },
          {
            answer: '\\"Hello\\"',
            correct: false,
            selected: false,
          },
          {
            answer: "Both of the above",
            correct: false,
            selected: false,
          },
          {
            answer: "None of the above",
            correct: true,
            selected: false,
          },
        ],
      },
    ],
  },
  another: {
    info: {
      name: "Another JavaScript Basics",
    },
    quiz: [
      {
        question: "Which method converts JSON data to a JavaScript object?",
        answer: [
          {
            answer: "JSON.parse()",
          },
          {
            answer: "JSON.fromString()",
          },
          {
            answer: "JSON.toObject()",
          },
          {
            answer: "JSON.stringify()",
          },
        ],
      },
    ],
  },
};

type QuizParams = {
  id: string;
};

const Quiz = () => {
  const [bDone, setDone] = useState<boolean>(false);
  const [quizData, setQuizData] = useState([]);
  const [quizAnswered, setQuizAnswer] = useState({});
  const [info, setInfo] = useState();
  const [qIndex, setIndex] = useState(0);
  const { id = "" } = useParams<QuizParams>();

  useEffect(() => {
    if (id in data) {
      setQuizData(data[id].quiz);
      setInfo(data[id].info.name);
    }
  }, [id]);
  return (
    <>
      <div className="flex justify-between flex-row w-full border-b">
        <div>
          <div className="flex h-full pl-4 items-center">{info}</div>
        </div>
        <div className="bg-gray-100 w-10 h-10 border-l">
          <div className="flex w-full h-full items-center justify-center">
            <Link to="/">
              <RiCloseLargeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-50 h-20 w-full fixed bottom-0 sm:px-8 px-4 border border-t">
          <div className="flex justify-between items-center h-full">
            <div className="flex w-64 gap-2 items-center">
              <div className="w-2/3">
                <ProgressBar value={(qIndex + 1) / quizData.length} />
              </div>
              <div className="w-1/3">
                {qIndex + 1} of {quizData.length}
              </div>
            </div>
            <div className="flex gap-2">
              <div className={qIndex == 0 ? "hidden" : "block"}>
                <button
                  className="rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-black transition-all 
                  shadow-md hover:shadow-lg focus:bg-slate-300 focus:shadow-none active:bg-slate-400 hover:bg-slate-100 active:shadow-none 
                  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 border-b border-slate-600"
                  type="button"
                  onClick={() => {
                    setIndex(qIndex - 1);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <GrPrevious />
                    <div>Prev</div>
                  </div>
                </button>
              </div>
              <div
                className={qIndex == quizData.length - 1 ? "hidden" : "block"}
              >
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                  disabled={!quizAnswered[qIndex]}
                  onClick={() => {
                    setIndex(qIndex + 1);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div>Next</div>
                    <GrNext />
                  </div>
                </button>
              </div>
              <div
                className={qIndex != quizData.length - 1 ? "hidden" : "block"}
              >
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                  disabled={!quizAnswered[qIndex]}
                  onClick={() => {
                    setDone(true);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div>Calculate Score</div>
                    <GrNext />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-10 p-4">
        <div className={bDone ? "hidden" : "block"}>
          <div className="md:pb-10 pb-4 text-3xl font-bold">
            {quizData[qIndex] && quizData[qIndex].question}
          </div>
          <div>
            <ol>
              {quizData[qIndex] &&
                quizData[qIndex].answer.map((item, idx) => (
                  <li
                    key={item.answer}
                    className={
                      item.selected
                        ? "m-4 bg-gray-200 border-b border"
                        : "m-4 border-b border"
                    }
                  >
                    <button
                      className="hover:bg-gray-300 p-4 w-full h-full flex "
                      onClick={() => {
                        const newQuizData = [...quizData];
                        newQuizData[qIndex].answer = setSelected(
                          newQuizData[qIndex].answer,
                          idx,
                        );

                        function setSelected(arr, index) {
                          const arrCopy = [...arr].map((x) => {
                            x.selected = false;
                            return x;
                          });
                          const quizAnswers = { ...quizAnswered };
                          quizAnswers[qIndex] = true;
                          setQuizAnswer(quizAnswers);
                          arrCopy[index].selected = true;
                          return arrCopy;
                        }

                        setQuizData(newQuizData);
                      }}
                    >
                      {item.answer}
                    </button>
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className={bDone ? "block" : "hidden"}>
          <h1>Test Results</h1>

          <div>this is your score</div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
