export type UserType = {
  fullName: string;
  email: string;
  img?: string;
  courses?: {
    name: string;
    img: string;
    percentage: string;
  }[];
  certificates?: {
    name: string;
    img: string;
  };
};

export type CoursesType = {
  name: string;
  img: string;
  percentage: string;
  abi: any;
  contract: string;
  address: string;
};

export type QuestionCardType = {
  label: string;
  onAnswer: (answer: number) => void;
  answer: number;
  selectedAnswer: number | null;
  correct: number;
};

export type Question = {
  index: number;
  question: string;
  options: string[];
  correct: number;
};

export type UserAnswerType = {
  index: number;
  option: number;
};

export type QuestionSectionType = {
  onClick: () => void;
  onAnswer: (answer: number) => void;
  questionData: Question;
  selectedAnswer: number | null;
};
