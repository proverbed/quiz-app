import { QuizMap } from "./Types";

export const store: QuizMap = {
  JavascriptBasics: {
    info: {
      name: "JavaScript Basics",
      description:
        "This is a simple JavaScript quiz, which covers basic JavaScript concepts.",
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
            answer:
              "It specifies the initial value of the input field shown inside the prompt dialog.",
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
      description: "Just some random Javascript questions (0-20)",
    },
    quiz: [
      {
        question:
          "In JavaScript, which of the following is NOT in the Temporal Dead Zone(TDZ) during hoisting?",
        explanation: {
          description:
            "var is hoisted with the default value of undefined while let, const and classes are hoisted but are in the Temporal Dead Zone(TDZ) until the declaration is executed.",
        },
        answer: [
          {
            answer: "class",
            correct: false,
            selected: false,
          },
          {
            answer: "const",
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
        question:
          "In JavaScript, which one of these types of loops will always run at least once?",
        explanation: {
          description:
            "The sequence of statements in a do..while loop runs at least once because the condition is evaluated after running the statements.",
        },
        answer: [
          {
            answer: "Do... While Loop",
            correct: true,
            selected: false,
          },
          {
            answer: "For Loop",
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
        question:
          "In JavaScript, which of the following functions accepts an image element and a file as arguments?",
        explanation: {
          description:
            "An HTML <input> element with the type='file' attribute is represented by the Input FileUpload object and is a client-side JavaScript object.",
        },
        answer: [
          {
            answer: "Client",
            correct: false,
            selected: false,
          },
          {
            answer: "FileUpLoad",
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
      {
        question: "In JavaScript, what is the runtime model based on?",
        explanation: {
          description:
            "The event loop is responsible for executing the code, processing events, and monitoring the callback queue and stack.",
          resourceLink:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop",
        },
        answer: [
          {
            answer: "Stack Memory Allotment Model",
            correct: false,
            selected: false,
          },
          {
            answer: "Queue Memory Allotment Model",
            correct: false,
            selected: false,
          },
          {
            answer: "Event Loop",
            correct: true,
            selected: false,
          },
          {
            answer: "Non Blocking Model",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question: "What is the main purpose of JavaScript in a website?",
        explanation: {
          description:
            "JavaScript is used to create interactive and dynamic websites.",
        },
        answer: [
          {
            answer: "Style",
            correct: false,
            selected: false,
          },
          {
            answer: "Functionality",
            correct: true,
            selected: false,
          },
          {
            answer: "Structure",
            correct: false,
            selected: false,
          },
          {
            answer: "Sound",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question: "What are the two basic groups of data types in JavaScript?",
        explanation: {
          description:
            "Primitive and Reference types are the two basic groups of data types in JavaScript.",
        },
        answer: [
          {
            answer: "Enumerated and Object types",
            correct: false,
            selected: false,
          },
          {
            answer: "Primitive and Reference types",
            correct: true,
            selected: false,
          },
          {
            answer: "Character and Number types",
            correct: false,
            selected: false,
          },
          {
            answer: "Primitive and Floating types",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question:
          "In JavaScript, what method removes the last element of an array and returns it?",
        explanation: {
          description:
            "The .pop() method removes the last element of an array and returns it.",
        },
        answer: [
          {
            answer: ".pop()",
            correct: true,
            selected: false,
          },
          {
            answer: ".push()",
            correct: false,
            selected: false,
          },
          {
            answer: ".unshift()",
            correct: false,
            selected: false,
          },
          {
            answer: ".shift()",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question:
          "In JavaScript, in the global execution context, 'this' refers to the ______ object whether in strict mode or not.",
        explanation: {
          description:
            "In the global execution context, the 'this' keyword always points to the window object",
        },
        answer: [
          {
            answer: "null",
            correct: false,
            selected: false,
          },
          {
            answer: "document",
            correct: false,
            selected: false,
          },
          {
            answer: "window",
            correct: true,
            selected: false,
          },
          {
            answer: "undefined",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question:
          "In JavaScript, the ___________ method returns the index position of the last occurrence of a value in an array.",
        explanation: {
          description:
            "The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.",
          resourceLink:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf",
        },
        answer: [
          {
            answer: "lastIndexOf()",
            correct: true,
            selected: false,
          },
          {
            answer: "getPosition()",
            correct: false,
            selected: false,
          },
          {
            answer: "charAt(0)",
            correct: false,
            selected: false,
          },
          {
            answer: "indexOf()",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question:
          "What is the result of the given code: console.log(12 + 'A')?",
        explanation: {
          description:
            "12 + 'A' would result in '12A' since the entire expression will be considered as string concatenation rather than addition.",
          resourceLink:
            "https://www.freecodecamp.org/news/javascript-string-concatenation/",
        },
        answer: [
          {
            answer: "13",
            correct: false,
            selected: false,
          },
          {
            answer: "12A",
            correct: true,
            selected: false,
          },
          {
            answer: "Error",
            correct: false,
            selected: false,
          },
          {
            answer: "NaN",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question: "In JavaScript, what is a use case for using an IIFE?",
        explanation: {
          description:
            "An IIFE or Immediately Invoked Function Expression, is used to declare a private variable and to avoid polluting the global environment. If a function is declared with an IIFE by using a parenthesis around it, the variable declared inside it becomes private and its value can be accessed using a getter function inside the original function.",
          resourceLink:
            "https://developer.mozilla.org/en-US/docs/Glossary/IIFE",
        },
        answer: [
          {
            answer: "To Create a Global Variable",
            correct: false,
            selected: false,
          },
          {
            answer: "To Create a Constant",
            correct: false,
            selected: false,
          },
          {
            answer:
              "To create a private variable and avoid polluting the global environment",
            correct: true,
            selected: false,
          },
          {
            answer: "To Run a Function",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question:
          "In JavaScript, what is the classification for a 'function' and 'class'?",
        explanation: {
          description:
            "Both 'function' and 'class' are used in the beginning to declare a function and class respectively.",
          resourceLink:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements",
        },
        answer: [
          {
            answer: "Keywords",
            correct: false,
            selected: false,
          },
          {
            answer: "Data types",
            correct: false,
            selected: false,
          },
          {
            answer: "Declaration statements",
            correct: true,
            selected: false,
          },
          {
            answer: "Variables",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question:
          "In JavaScript, what operator allows you to create a function that takes a variable number of arguments?",
        explanation: {
          description:
            "The rest operator takes the individual arguments passed to a function and converts them into an array.",
          resourceLink:
            "https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/",
        },
        answer: [
          {
            answer: "Rest operator",
            correct: true,
            selected: false,
          },
          {
            answer: "Spread operator",
            correct: false,
            selected: false,
          },
          {
            answer: "Multiplication Operator",
            correct: false,
            selected: false,
          },
          {
            answer: "Division Operator",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question:
          "Select the correct syntax for a JavaScript ES6 arrow function:",
        explanation: {
          description:
            "ES6 arrow functions provide you with an alternative way to write shorter syntax compared to the traditional function expression.",
          resourceLink:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
        },
        answer: [
          {
            answer: "const variable =>> function(){//code}",
            correct: false,
            selected: false,
          },
          {
            answer: "const variable === function() => {//code}",
            correct: false,
            selected: false,
          },
          {
            answer: "const variable <=> ()()// code ",
            correct: false,
            selected: false,
          },
          {
            answer: "const variable = () => // code",
            correct: true,
            selected: false,
          },
        ],
      },
      {
        question:
          "In JavaScript, what is the name of the method used to find elements that match one or more selectors?",
        explanation: {
          description:
            "The .querySelector() method is used to find elements in the DOM that match one or more selectors.",
          resourceLink:
            "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/",
        },
        answer: [
          {
            answer: ".padEnd()",
            correct: false,
            selected: false,
          },
          {
            answer: "Optional chaining",
            correct: false,
            selected: false,
          },
          {
            answer: ".querySelector()",
            correct: true,
            selected: false,
          },
          {
            answer: ".textContent()",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question: "What is the primary purpose of web cookies?",
        explanation: {
          description:
            "Web cookies are primarily used to store data on the client-side, such as user sessions and preferences, to enhance the user experience.",
          resourceLink:
            "https://www.freecodecamp.org/news/everything-you-need-to-know-about-cookies-for-web-development/",
        },
        answer: [
          {
            answer: "Routing internet traffic.",
            correct: false,
            selected: false,
          },
          {
            answer: "Collecting user personal information.",
            correct: false,
            selected: false,
          },
          {
            answer:
              "Storing data on the client-side to maintain user sessions and preferences.",
            correct: true,
            selected: false,
          },
          {
            answer: "Displaying website content.",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question: "In JavaScript, what does NaN means?",
        explanation: {
          description:
            "The global NaN property is a value representing Not-A-Number. This property is used to check if a value is not a valid number.",
          resourceLink:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN",
        },
        answer: [
          {
            answer: "Non-Alpha-Numeric",
            correct: false,
            selected: false,
          },
          {
            answer: "Not-A-Number",
            correct: true,
            selected: false,
          },
          {
            answer: "Near-Me Area Network",
            correct: false,
            selected: false,
          },
          {
            answer: "Non-numeric",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question:
          "In JavaScript, what is the name of the method used to see if one string is found in another?",
        explanation: {
          description:
            "The .includes() method is used to check if one string is found in another.",
          resourceLink:
            "https://www.freecodecamp.org/news/javascript-string-contains-how-to-use-js-includes/",
        },
        answer: [
          {
            answer: ".trim()",
            correct: false,
            selected: false,
          },
          {
            answer: ".includes()",
            correct: true,
            selected: false,
          },
          {
            answer: ".padEnd()",
            correct: false,
            selected: false,
          },
          {
            answer: ".slice()",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question: "In JavaScript, what will 'typeof NaN' return?",
        explanation: {
          description:
            "In JavaScript, NaN (not-a-number) is still a numeric data type, but it is undefined as a real number.",
          resourceLink:
            "https://www.freecodecamp.org/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/",
        },
        answer: [
          {
            answer: "Number",
            correct: true,
            selected: false,
          },
          {
            answer: "Null",
            correct: false,
            selected: false,
          },
          {
            answer: "NaN",
            correct: false,
            selected: false,
          },
          {
            answer: "ReferenceError",
            correct: false,
            selected: false,
          },
        ],
      },
      {
        question:
          "In JavaScript, what is the result of the following code: console.log(7 - '5')?",
        explanation: {
          description:
            "The result is 2 because in JavaScript you can't use the - operator on strings so it will automatically convert the strings to numbers and subtract the two values.",
          resourceLink:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction#subtraction_with_non-numbers",
        },
        answer: [
          {
            answer: "NaN",
            correct: false,
            selected: false,
          },
          {
            answer: "12",
            correct: false,
            selected: false,
          },
          {
            answer: "undefined",
            correct: false,
            selected: false,
          },
          {
            answer: "2",
            correct: true,
            selected: false,
          },
        ],
      },
    ],
  },
};

export default store;
