import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";

const data = {
  test: {
    info: {
        name: "JavaScript Basics"
    },
    quiz: [
        {
          question: "How to declare a variable in JavaScript?",
          answer: [
            {
              answer: "Using dec",
              correct: true,
              selected: false,
            },
            {
              answer: "Using declare",
              correct: true,
              selected: false,
            },
            {
              answer: "Using var",
              correct: true,
              selected: false,
            },
            {
              answer: "Using variable",
              correct: true,
              selected: false,
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
      ]
  },
  another: {
    info: {
        name: "Another JavaScript Basics"
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
      ]
  },
};

type QuizParams = {
  id: string;
};

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [info, setInfo] = useState();
  const [qIndex, setIndex] = useState(0);
  const { id = "" } = useParams<QuizParams>();

  useEffect(() => {
    if (id in data) {
      setQuizData(data[id].quiz);
      setInfo(data[id].info.name)
    }
  }, [id]);
  return (
    <>
      <div className="flex justify-between flex-row w-full border-b">
        <div>
            <div className="flex h-full pl-4 items-center">
                {info}
            </div>
        </div>
        <div className="bg-gray-100 w-10 h-10 border-l">
            <div className="flex w-full h-full items-center justify-center"><Link to='/'><RiCloseLargeFill /></Link></div>
        </div>
      </div>

      <div className="md:p-10 p-4">
        <div className="md:pb-10 pb-4 text-3xl font-bold">
          {quizData[qIndex] && quizData[qIndex].question}
        </div>
        <div>
          <ol >
            {quizData[qIndex] &&
              quizData[qIndex].answer.map((item, idx) => (
                <li key={item.answer} className={item.selected ? 'm-4 bg-gray-300 border-b border': 'm-4 border-b border'}>
                    <button className="hover:bg-gray-100 p-4 rounded-md w-full h-full flex " onClick={() => {
                      let newQuizData = [...quizData];
                      newQuizData[qIndex].answer = setSelected(newQuizData[qIndex].answer, idx);

                      function setSelected(arr, index) {
                        let arrCopy = [...arr].map(x=>{
                          x.selected = false;
                          return x;
                        });
                        arrCopy[index].selected = true;
                        return arrCopy;
                      }

                      setQuizData(newQuizData);
                    }}>
                    {item.answer} 
                    </button>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Quiz;
