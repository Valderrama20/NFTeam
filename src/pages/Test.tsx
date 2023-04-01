import { useParams } from 'react-router-dom';
import styles from '../styles/Test.module.css';
import { useState } from 'react';
import ProgressLine from '../components/progressLine/ProgressLine';

const Test = () => {
  const { course } = useParams();
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    if (progress < 2) {
      setProgress(progress + 1);
    }
  };
  return (
    <div className={styles.container}>
      <h2 style={{ margin: 0 }}>Evaluación - {course} </h2>

      {/* Progress Line */}
      <ProgressLine activeStep={progress} />

      <div className={styles.question}>
        <h2>
          La diferencia entre rollup y un state channel es que el state channel
          solo permite conectar 2 personas{' '}
        </h2>
      </div>
      <button onClick={updateProgress}>AVANZAR</button>
    </div>
  );
};

export default Test;
