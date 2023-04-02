import { useState } from 'react';
import style from '../styles/Profile.module.css';
import Card from '../components/profile/Card';
import useWallet from '../hooks/useWallet';
import useLocalStorage from '../hooks/useLocalStorage';
import { CERTIFICATES, TESTS, USER_IMG } from '../utils/constants';

const Profile = () => {
  const [courses, setCourses] = useState(true);
  const { address } = useWallet();
  const [fullName] = useLocalStorage('fullName', '');

  const selectCourses = (isCourse: boolean) => {
    setCourses(isCourse);
  };

  const titleText = courses ? 'Cursos' : 'Certificados';
  const selectedList = courses ? TESTS : CERTIFICATES;
  return (
    <div>
      <div className={style.logo}></div>
      <div className={style.user}>
        <img src={USER_IMG} alt="profile img" />
        <label htmlFor="">{fullName}</label>
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
              abi={course.abi}
              contract={course.contract}
              address={address}
            />
          ))}
        </div>
      </div>
      {/* <ModifiqueInfoUser /> */}
    </div>
  );
};

export default Profile;
