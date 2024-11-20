import { QuizMap } from "./Types";

export const store: QuizMap = {
    JavascriptBasics: {
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
          question: "What does the second argument of prompt() do?",
          answer: [
            {
              answer: "It makes the function call synchronous.",
              correct: false,
              selected: false,
            },
            {
              answer: "It specifies the return value of the prompt.",
              correct: false,
              selected: false,
            },
            {
              answer: "It specifies the style of the prompt to display.",
              correct: false,
              selected: false,
            },
            {
              answer: "It specifies the initial value of the input field shown inside the prompt dialog.",
              correct: true,
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
              answer: "'Hello'",
              correct: false,
              selected: false,
            },
            {
              answer: '"Hello"',
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
  
  export default store;