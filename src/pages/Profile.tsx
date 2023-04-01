import { useState } from 'react';
import style from '../styles/Profile.module.css';
import { USER } from '../utils/constants';
import Card from '../components/profile/Card';

const Profile = () => {
  const [courses, setCourses] = useState(true);

  const selectCourses = (isCourse: boolean) => {
    setCourses(isCourse);
  };

  const titleText = courses ? 'Cursos' : 'Certificados';
  const selectedList = courses ? USER.courses : USER.certificates;
  return (
    <div>
      <div className={style.logo}></div>
      <div className={style.user}>
        <img src={USER.img} alt="profile img" />
        <label htmlFor="">{`${USER.fullname}`}</label>
      </div>
      <div className={style.certificates}>
        <div className={style.barra}>
          <p className={style.p}>{titleText}</p>
          <div className={style.btn}>
            <button onClick={() => selectCourses(false)}>Certificados</button>
            <button onClick={() => selectCourses(true)}>Cursos</button>
          </div>
        </div>

        <div className={style.nfts}>
          {selectedList.map(course => (
            <Card
              key={course.name}
              img={course.img}
              name={course.name}
              percentage={course.percentage}
            />
          ))}
        </div>
      </div>
      {/* <ModifiqueInfoUser /> */}
    </div>
  );
};

export default Profile;
