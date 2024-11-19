import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { GrPrevious, GrNext } from "react-icons/gr";
import ProgressBar from "../components/ProgressBar";

interface Info {
  name: string;
}

interface Answer {
  answer: string;
  correct: boolean;
  selected: boolean;
}

interface Quiz {
  question: string;
  answer: Answer[];
}

interface QuizMap {
  [quizName: string]: {
    info: Info;
    quiz: Quiz[];
  };
}

interface QuizAnsweredMap {
  [questionIndex: number]: boolean;
}

const data: QuizMap = {
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
            correct: true,
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
            correct: true,
            selected: false,
          },
          {
            answer: "None of the above",
            correct: false,
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
};

const rankList: {[questionIndex: string]: {rank: string, description: string}} = {
  inexperienced: {
    rank: 'Inexperienced', 
    description: "It looks like you need to study more. But no worries! Review your answers for quick insights."
  },
  amateur: {
    rank: "Amateur", 
    description: "You are missing some important points. Revise, for you'll do much better!"
  },
  competent: {
    rank: 'Competent', 
    description: "It looks like you need to study more. But no worries! Review your answers for quick insights."
  },
  master: {
    rank: 'Master',
    description: 'You simply nailed it! Excellent! Keep it up!!'
  }
}

type QuizParams = {
  id: string;
};

const Quiz = () => {
  const [numberOfCorrectQuestions, setNumberOfCorrectQuestions] = useState(0);
  const [bDone, setDone] = useState<boolean>(false);
  const [quizData, setQuizData] = useState<Quiz[]>([]);
  const [quizAnswered, setQuizAnswer] = useState<QuizAnsweredMap>({});
  const [quizDescription, setQuizDescription] = useState<string>("");
  const [qIndex, setIndex] = useState<number>(0);
  const { id = "" } = useParams<QuizParams>();
  const navigate = useNavigate();
  const [rank, setRank] = useState("inexperienced");

  useEffect(() => {
    if (id in data) {
      const clone = JSON.parse(JSON.stringify(data[id].quiz));
      setQuizData(clone);
      setQuizDescription(data[id].info.name);
    }
  }, [id]);

  useEffect(() => {
    let count: number = 0;
    let score: number = 0;
    quizData.forEach((element: Quiz) => {
      element.answer.forEach((x: Answer) => {
        if (x.selected && x.correct) {
          count++;
        }
      });
      setNumberOfCorrectQuestions(count);
      score = (count/quizData.length)*100;

      if (score < 50) {
        setRank('inexperienced');
      } else if (score >= 50 && score <= 74) {
        setRank('amateur');
      } else if (score >= 75 && score < 100) {
        setRank('competent');
      } else {
        setRank('master');
      }
      console.log(count, quizData.length, score);
    });
  }, [bDone]);

  return (
    <>
      <div className="flex justify-between flex-row w-full border-b">
        <div>
          <div className="flex h-full pl-4 items-center">{quizDescription}</div>
        </div>
        <div className="bg-gray-100 w-10 h-10 border-l">
          <div className="flex w-full h-full items-center justify-center">
            <Link
              to="/"
            >
              <RiCloseLargeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-50 h-20 w-full fixed bottom-0 sm:px-8 px-4 border border-t">
          <div className="flex justify-between items-center h-full">
            <div>
              <div className={bDone ? 'hidden' : 'flex w-64 gap-2 items-center'}>
                <div className="w-2/3">
                  <ProgressBar value={(qIndex + 1) / quizData.length} />
                </div>
                <div className="w-1/3">
                  {qIndex + 1} of {quizData.length}
                </div>
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
                    if (bDone) {
                      alert('Review answers')
                    } else {
                      setIndex(qIndex - 1);
                    }
                  }}
                >
                  <div className="flex items-center gap-2">
                    <GrPrevious />
                    <div>{bDone ? 'Review answers' : 'Prev'}</div>
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
                    if (bDone) {
                      navigate('/');
                    } else {
                      setDone(true);
                    }
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div>{bDone ? 'Next Quiz' : 'Calculate Score'}</div>
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

                        function setSelected(arr: Answer[], index: number) {
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
          <div className="h-full w-full">
            <div className="flex w-full items-center flex-col ">
              <h1 className="text-gray-600">Score</h1>
              <h4 className="text-5xl ">{(numberOfCorrectQuestions / quizData.length) * 100} %</h4>
            </div>

            <div className="grid grid-rows-2 md:grid-cols-2 mt-10">
              <div className="">
                <div>
                  <h1 className="pb-2 text-gray-600">Rank</h1>
                  <h4 className="text-3xl pb-2">{rankList[rank].rank}</h4>
                  <p className="w-3/4 pb-10">{rankList[rank].description}</p>
                </div>
              </div>
              <div className="">
                <div>
                  <h1 className="pb-4 text-gray-600">Overview Results</h1>

                  <table className="table-fixed w-3/4 rounded-md border border-gray-400">
                    <tbody className="  ">
                      <tr className="">
                        <td className="w-1/2 bg-gray-100 border-gray-400 border p-2 font-bold">Total questions</td>
                        <td className="border-gray-400 border p-2">{quizData.length}</td>
                      </tr>
                      <tr>
                        <td className="w-1/2 bg-gray-100 border-gray-400 border p-2 font-bold">Correct answers</td>
                        <td className="border-gray-400 border p-2">{numberOfCorrectQuestions}</td>
                      </tr>
                      {/* <tr>
                        <td className="w-1/2 bg-gray-100 border-gray-400 border p-2 font-bold">Time taken</td>{" "}
                        <td className="border-gray-400 border p-2">10 minutes</td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
