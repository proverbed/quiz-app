export interface Info {
    name: string;
    description: string;
  }
  
  export interface Answer {
    answer: string;
    correct: boolean;
    selected: boolean;
  }
  
  export interface Quiz {
    question: string;
    explanation?: string;
    answer: Answer[];
  }
  
  export interface QuizMap {
    [quizName: string]: {
      info: Info;
      quiz: Quiz[];
    };
  }
  
  export interface QuizAnsweredMap {
    [questionIndex: number]: boolean;
  }

export default Quiz;
