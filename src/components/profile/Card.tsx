import { useState } from 'react';
import { CoursesType, UserType } from '../../types';
import style from './Profile.module.css';
import Progress from '../progress/Progress';

const Card = ({ img, name, percentage }: CoursesType) => {

 const [viewProgress, setViewProgress] = useState(false)

 const set = () => {
  setViewProgress(!viewProgress)
 }
 
 console.log(viewProgress)

  return (<div>
    <div className={style.card} onClick={set}>
      <img src={img} alt="" />
      <div className={style.data}>
        <h3>{name}</h3>
      </div>
      <label htmlFor="">{percentage}</label>
    </div>
    {viewProgress && <Progress set={set}/>}
    </div>
  );
};

export default Card;
