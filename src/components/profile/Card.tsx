import { CoursesType, UserType } from '../../types';
import style from './Profile.module.css';

const Card = ({ img, name, percentage }: CoursesType) => {
  return (
    <div className={style.card}>
      <img src={img} alt="" />
      <div className={style.data}>
        <h3>{name}</h3>
      </div>
      <label htmlFor="">{percentage}</label>
    </div>
  );
};

export default Card;
