import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { GrPrevious, GrNext } from "react-icons/gr";
import ProgressBar from "../components/ProgressBar";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import Quiz, { Answer, QuizAnsweredMap } from "../store/Types";
import { store as data } from "../store/store.ts";

const rankList: {
  [questionIndex: string]: { rank: string; description: string };
} = {
  inexperienced: {
    rank: "Inexperienced",
    description:
      "It looks like you need to study more. But no worries! Review your answers for quick insights.",
  },
  amateur: {
    rank: "Amateur",
    description:
      "You are missing some important points. Revise, for you'll do much better!",
  },
  competent: {
    rank: "Competent",
    description:
      "It looks like you need to study more. But no worries! Review your answers for quick insights.",
  },
  master: {
    rank: "Master",
    description: "You simply nailed it! Excellent! Keep it up!!",
  },
};

type QuizParams = {
  id: string;
};

enum Status {
  InProgress,
  Complete,
  Review,
}

const QuizComponent = () => {
  const [numberOfCorrectQuestions, setNumberOfCorrectQuestions] = useState(0);
  const [status, setStatus] = useState<Status>(Status.InProgress);
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
      score = (count / quizData.length) * 100;

      if (score < 50) {
        setRank("inexperienced");
      } else if (score >= 50 && score <= 74) {
        setRank("amateur");
      } else if (score >= 75 && score < 100) {
        setRank("competent");
      } else {
        setRank("master");
      }
      console.log(count, quizData.length, score);
    });
  }, [status, quizData]);

  return (
    <>
      <div className="flex justify-between flex-row w-full border-b">
        <div>
          <div className="flex h-full pl-4 items-center">{quizDescription}</div>
        </div>
        <div className="bg-gray-100 w-10 h-10 border-l">
          <div className="flex w-full h-full items-center justify-center">
            <Link to="/">
              <RiCloseLargeFill />
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bg-gray-50 h-20 w-full fixed bottom-0 sm:px-8 px-4 border border-t">
          <div className="flex justify-between items-center h-full">
            <div>
              <div
                className={
                  status === Status.Complete
                    ? "hidden"
                    : "flex sm:w-64 w-16 gap-2 items-center"
                }
              >
                <div className="w-2/3 sm:block hidden">
                  <div className="">
                    <ProgressBar value={(qIndex + 1) / quizData.length} />
                  </div>
                </div>
                <div className="sm:w-1/3 w-full">
                  {qIndex + 1} of {quizData.length}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div
                className={
                  qIndex === 0 || status === Status.Complete
                    ? "hidden"
                    : "block"
                }
              >
                {/* <div> */}
                <button
                  className="rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-black transition-all 
                  shadow-md hover:shadow-lg focus:bg-slate-300 focus:shadow-none active:bg-slate-400 hover:bg-slate-100 active:shadow-none 
                  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 border-b border-slate-600"
                  type="button"
                  onClick={() => {
                    if (status === Status.Complete) {
                      setIndex(0);
                    } else {
                      setIndex(qIndex - 1);
                    }
                  }}
                >
                  <div className="flex items-center gap-2">
                    <GrPrevious />
                    <div>Prev</div>
                  </div>
                </button>
              </div>
              <div className={status !== Status.Complete ? "hidden" : "block"}>
                <button
                  className="rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-black transition-all 
                  shadow-md hover:shadow-lg focus:bg-slate-300 focus:shadow-none active:bg-slate-400 hover:bg-slate-100 active:shadow-none 
                  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 border-b border-slate-600"
                  type="button"
                  onClick={() => {
                    setIndex(0);
                    setStatus(Status.Review);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <GrPrevious />
                    <div>Review answers</div>
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
              <div className={status === Status.Review ? "hidden" : "block"}>
                <div
                  className={qIndex != quizData.length - 1 ? "hidden" : "block"}
                >
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                    type="button"
                    disabled={!quizAnswered[qIndex]}
                    onClick={() => {
                      if (status === Status.Complete) {
                        navigate("/");
                      } else {
                        setStatus(Status.Complete);
                      }
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div>
                        {status === Status.Complete
                          ? "Next Quiz"
                          : "Calculate Score"}
                      </div>
                      <GrNext />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-10 p-4 pb-20">
        <div className={status === Status.Complete ? "hidden" : "block"}>
          <div className="md:pb-10 pb-4 text-3xl font-bold">
            {quizData[qIndex] && quizData[qIndex].question}
          </div>
          <div
            className={
              status === Status.Review &&
              quizData[qIndex] &&
              quizData[qIndex].explanation
                ? "block"
                : "hidden"
            }
          >
            <div className="bg-gray-100 rounded-md px-4 py-6">
              <div className="sm:w-3/4 w-full">
                <h1 className="font-bold pb-4 ">Explanation:</h1>
                <div>
                  {quizData[qIndex] &&
                    quizData[qIndex].explanation &&
                    quizData[qIndex].explanation.description}
                </div>

                <div
                  className={
                    status === Status.Review &&
                    quizData[qIndex] &&
                    quizData[qIndex].explanation &&
                    quizData[qIndex].explanation.resourceLink
                      ? "block"
                      : "hidden"
                  }
                >
                  <div className="pt-4">
                    <Link
                      to={
                        (quizData[qIndex] &&
                          quizData[qIndex].explanation &&
                          quizData[qIndex].explanation.resourceLink) ||
                        ""
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ol>
              {quizData[qIndex] &&
                quizData[qIndex].answer.map((item, idx) => (
                  <li
                    key={item.answer}
                    className={
                      (item.selected && "bg-gray-200") +
                      " " +
                      (status === Status.Review &&
                        item.selected &&
                        !item.correct &&
                        "border-red-400") +
                      " " +
                      "m-4 border-b border"
                    }
                  >
                    <div
                      className={status === Status.Review ? "block" : "hidden"}
                    >
                      <div
                        className={
                          item.selected && item.correct ? "block" : "hidden"
                        }
                      >
                        <div className="flex gap-2 items-center bg-green-300 w-fit p-2 rounded-md">
                          <div>
                            <FaCheck size={14} />
                          </div>
                          <div className="text-xs">Correct answer</div>
                        </div>
                      </div>
                      <div
                        className={
                          !item.selected && item.correct ? "block" : "hidden"
                        }
                      >
                        <div className="flex gap-2 items-center bg-slate-600 w-fit p-2 rounded-md">
                          <div>
                            <FaCheck size={14} style={{ color: "white" }} />
                          </div>
                          <div className="text-xs text-white">
                            Correct answer
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          item.selected && !item.correct ? "block" : "hidden"
                        }
                      >
                        <div className="flex gap-2 items-center bg-red-300 w-fit p-2 rounded-md">
                          <div>
                            <RxCross2 size={14} />
                          </div>
                          <div className="text-xs">Wrong selection</div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="hover:bg-gray-300 p-4 w-full h-full flex "
                      onClick={() => {
                        if (status !== Status.Review) {
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
                        }
                      }}
                    >
                      {item.answer}
                    </button>
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className={status === Status.Complete ? "block" : "hidden"}>
          <div className="h-full w-full">
            <div className="flex w-full items-center flex-col ">
              <h1 className="text-gray-600 font-light">Score</h1>
              <h4 className="text-5xl ">
                {Math.round((numberOfCorrectQuestions / quizData.length) * 100)}{" "}
                %
              </h4>
            </div>

            <div className="grid grid-rows-2 md:grid-cols-2 mt-10">
              <div className="">
                <div>
                  <h1 className="pb-2 text-gray-600 font-light">Rank</h1>
                  <h4 className="text-3xl pb-2">{rankList[rank].rank}</h4>
                  <p className="w-3/4 pb-10">{rankList[rank].description}</p>
                </div>
              </div>
              <div className="">
                <div>
                  <h1 className="pb-4 text-gray-600 font-light">
                    Overview Results
                  </h1>

                  <table className="table-fixed w-3/4 rounded-md border border-gray-400">
                    <tbody className="  ">
                      <tr className="">
                        <td className="w-1/2 bg-gray-100 border-gray-400 border p-2 font-bold">
                          Total questions
                        </td>
                        <td className="border-gray-400 border p-2">
                          {quizData.length}
                        </td>
                      </tr>
                      <tr>
                        <td className="w-1/2 bg-gray-100 border-gray-400 border p-2 font-bold">
                          Correct answers
                        </td>
                        <td className="border-gray-400 border p-2">
                          {numberOfCorrectQuestions}
                        </td>
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

export default QuizComponent;
