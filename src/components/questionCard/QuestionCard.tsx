import styles from './QuestionCard.module.css';
import Checkbox from '../../assets/Checkbox';
import { QuestionCardType } from '../../types';

const QuestionCard = ({
  label,
  onAnswer,
  answer,
  selectedAnswer,
  correct,
}: QuestionCardType) => {
  const handleAnswer = () => {
    if (selectedAnswer === null) {
      onAnswer(answer);
    }
  };
  const type =
    selectedAnswer === answer
      ? selectedAnswer === correct
        ? 'correct'
        : 'incorrect'
      : 'default';

  const style =
    selectedAnswer === answer
      ? selectedAnswer === correct
        ? styles.correct
        : styles.incorrect
      : '';

  return (
    <div onClick={handleAnswer} className={`${styles.question} ${style}`}>
      <Checkbox type={type} />
      <h5 className={styles.text}>{label}</h5>
    </div>
  );
};

export default QuestionCard;
