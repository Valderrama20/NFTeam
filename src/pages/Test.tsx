import { useParams } from 'react-router-dom';
import styles from '../styles/Test.module.css';
import { useState, useEffect, useMemo } from 'react';
import ProgressLine from '../components/progressLine/ProgressLine';
import { MODULE_ONE, MODULE_TWO, SERVER, TESTS } from '../utils/constants';
import { Question } from '../types';
import { useNavigate } from 'react-router-dom';
import QuestionContainer from '../components/questionConatiner/QuestionContainer';
import axios from 'axios';
import useWallet from '../hooks/useWallet';

const Test = () => {
  const { course } = useParams();
  const testContract = TESTS[0].contract;
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [test, setTest] = useState<Question[]>();
  const { address } = useWallet();
  const actualQuestion = useMemo(() => {
    if (test) return test[progress];
  }, [progress, test]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const lastItem = userAnswers.length === test?.length;

  useEffect(() => {
    if (course === 'btc') setTest(MODULE_ONE);
    if (course === 'eth') setTest(MODULE_TWO);
  }, [course]);

  const updateProgress = () => {
    if (progress < 3) {
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

  const onSubmitAnswer = async () => {
    if (address) {
      const payload = {
        address,
        courseAddress: testContract,
        points: 50,
      };

      await axios.post(`${SERVER}/quiz`, payload);

      navigate('/profile');
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
      ) : lastItem ? (
        <button onClick={onSubmitAnswer} className={styles.btn}>
          Finalizar Curso
        </button>
      ) : (
        <p>Modulo no encontrado</p>
      )}
    </div>
  );
};

export default Test;
