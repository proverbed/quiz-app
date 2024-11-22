import { QuizMap } from "./Types";

export const store: QuizMap = {
    JavascriptBasics: {
      info: {
        name: "JavaScript Basics",
        description: "This is a simple JavaScript quiz, which covers basic JavaScript concepts."
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
    randomJavascript: {
      info: {
        name: "Random JavaScript Questions",
        description: "Just some random Javascript questions"
      },
      quiz: [
        {
          question: "In JavaScript, which of the following is NOT in the Temporal Dead Zone(TDZ) during hoisting?",
          explanation: "var is hoisted with the default value of undefined while let, const and classes are hoisted but are in the Temporal Dead Zone(TDZ) until the declaration is executed.",
          answer: [
            {
              answer: "class",
              correct: false,
              selected: false,
            },
            {
              answer: 'const',
              correct: false,
              selected: false,
            },
            {
              answer: "var",
              correct: true,
              selected: false,
            },
            {
              answer: "let",
              correct: false,
              selected: false,
            },
          ],
        },
        {
          question: "In JavaScript, which one of these types of loops will always run at least once?",
          explanation: "The sequence of statements in a do..while loop runs at least once because the condition is evaluated after running the statements.",
          answer: [
            {
              answer: "Do... While Loop",
              correct: true,
              selected: false,
            },
            {
              answer: 'For Loop',
              correct: false,
              selected: false,
            },
            {
              answer: "While Loop",
              correct: false,
              selected: false,
            },
            {
              answer: "for each",
              correct: false,
              selected: false,
            },
          ],
        },
        {
          question: "In JavaScript, which of the following functions accepts an image element and a file as arguments?",
          explanation: "An HTML <input> element with the type='file' attribute is represented by the Input FileUpload object and is a client-side JavaScript object.",
          answer: [
            {
              answer: "Client",
              correct: false,
              selected: false,
            },
            {
              answer: 'FileUpLoad',
              correct: true,
              selected: false,
            },
            {
              answer: "DownFile",
              correct: false,
              selected: false,
            },
            {
              answer: "Database",
              correct: false,
              selected: false,
            },
          ],
        },
      ],
    },
  };
  
  export default store;