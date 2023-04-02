import { useState } from 'react';
import { CoursesType } from '../../types';
import style from './Card.module.css';
import Progress from '../progress/Progress';

const Card = ({ img, name, percentage }: CoursesType) => {
  const [viewProgress, setViewProgress] = useState(false);

  const set = () => {
    setViewProgress(!viewProgress);
  };

  console.log(viewProgress);

  return (
    <div>
    <div>
      <div className={style.card} onClick={set}>
        <img src={img} alt="" />
        <div className={style.data}>
          <h3>{name}</h3>
        </div>
        <label htmlFor="">{percentage}</label>
      </div>
      <div className={style.progress}>
      <div className={style.progress_bar}>
     <div className={style.progresss} style={{ width: `${percentage}%` }}></div>
     </div> 
     <label htmlFor="">{percentage}%</label>
    </div>
    </div>
    {viewProgress && <Progress set={set}/>}
    </div>
  );
};

export default Card;
