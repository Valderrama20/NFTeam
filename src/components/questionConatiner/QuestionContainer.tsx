import { useState } from 'react';
import styles from './QuestionContainer.module.css';
import QuestionCard from '../questionCard/QuestionCard';
import { QuestionSectionType } from '../../types';

const QuestionContainer = ({
  onClick,
  questionData,
  onAnswer,
  selectedAnswer,
}: QuestionSectionType) => {
  const { question, options, correct } = questionData;

  return (
    <div>
      <div className={styles.questionContainer}>
        <h2>{question}</h2>
      </div>
      <div className={styles.questionContainer}>
        {options.map((option, index) => (
          <QuestionCard
            onAnswer={onAnswer}
            key={`${option}-${index}`}
            label={option}
            answer={index}
            selectedAnswer={selectedAnswer}
            correct={correct}
          />
        ))}

        <div className={styles.btnContainer}>
          <button className={styles.btn} onClick={onClick}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
