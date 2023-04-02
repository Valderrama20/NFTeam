import { useParams } from 'react-router-dom';
import styles from '../styles/Test.module.css';
import { useState, useEffect, useMemo } from 'react';
import ProgressLine from '../components/progressLine/ProgressLine';
import { MODULE_ONE, MODULE_TWO } from '../utils/constants';
import { Question } from '../types';
import QuestionContainer from '../components/questionConatiner/QuestionContainer';

const Test = () => {
  const { course } = useParams();
  const [progress, setProgress] = useState(0);
  const [test, setTest] = useState<Question[]>();

  const actualQuestion = useMemo(() => {
    if (test) return test[progress];
  }, [progress, test]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    if (course === 'btc') setTest(MODULE_ONE);
    if (course === 'eth') setTest(MODULE_TWO);
  }, [course]);

  const updateProgress = () => {
    if (progress < 2) {
      if (selectedAnswer !== null) {
        setProgress(progress + 1);
        setUserAnswers([...userAnswers, selectedAnswer]);
        setSelectedAnswer(null);
      }
    }
  };

  const onUpdateAnswer = (answer: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
    }
  };

  return (
    <div className={styles.container}>
      <h2 style={{ margin: 0 }}>Evaluación - {course} </h2>

      {/* Progress Line */}
      <ProgressLine activeStep={progress} />
      {actualQuestion ? (
        <QuestionContainer
          questionData={actualQuestion}
          onClick={updateProgress}
          onAnswer={onUpdateAnswer}
          selectedAnswer={selectedAnswer}
        />
      ) : (
        <p>Modulo no encontrado</p>
      )}
    </div>
  );
};

export default Test;
