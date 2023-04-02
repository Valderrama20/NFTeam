import { TESTS } from '../../utils/constants';
import style from './Progress.module.css';
import { useNavigate } from 'react-router-dom';

const Progress = ({
  set,
  image,
  level,
}: {
  set: () => void;
  image?: string;
  level?: string;
}) => {
  const navigate = useNavigate();
  const levelIndex = level ? Number(level.replace('Nivel ', '')) : 0;
  const onStartTest = (isDisabled: boolean, path: string) => {
    console.log(path);
    if (!isDisabled) {
      alert('Curso no habilitado');
    } else {
      navigate(`/test/${path}`);
    }
  };
  console.log(level);

  return (
    <div className={style.father}>
      <button onClick={set}>X</button>
      <div className={style.name}>
        <img src={image} alt={level} />
        <h3>Solow</h3>
      </div>
      <div className={style.tests}>
        <div className={style.line}></div>
        <div className={style.left}>
          {TESTS.map((e, i) => (
            <div>{`${++i}0%`}</div>
          ))}
        </div>
        <div className={style.right}>
          {TESTS.map((test, index) => (
            <div key={test.id} className={style.progress}>
              <p className={style.p}>{test.name}</p>
              <button
                disabled={levelIndex !== index}
                onClick={() => onStartTest(levelIndex === index, test.id)}
              >
                Realizar Examen
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;
