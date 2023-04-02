import { test } from 'node:test';
import style from './Progress.module.css';

const Progress = ({
  set,
  image,
  level,
}: {
  set: () => void;
  image?: string;
  level?: string;
}) => {
  const tests = [
    { name: 'introduccion a cripto' },
    { name: 'Que es Web3' },
    { name: 'Bitcoin' },
    { name: 'Ethereum' },
    { name: 'que es DeFi' },
    { name: 'Poops y NFTs' },
  ];

  return (
    <div className={style.father}>
      <button onClick={set}>X</button>
      <div className={style.name}>
        <img src={image} alt={level} />
        <h3>{level ?? 'Solow'}</h3>
      </div>
      <div className={style.tests}>
        <div className={style.line}></div>
        <div className={style.left}>
          {tests.map(e => (
            <div>10%</div>
          ))}
        </div>
        <div className={style.right}>
          {tests.map(e => (
            <div className={style.progress}>
              <p className={style.p}>{e.name}</p>
              <button>Realizar Examen</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;
