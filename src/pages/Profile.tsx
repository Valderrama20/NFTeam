import { useState } from 'react';
import style from '../styles/Profile.module.css';
import { USER } from '../utils/constants';
import Card from '../components/profile/Card';
import useWallet from '../hooks/useWallet';
import useLocalStorage from '../hooks/useLocalStorage';

const Profile = () => {
  const [courses, setCourses] = useState(true);
  const { address } = useWallet();
  const [fullName] = useLocalStorage("fullName","")

  const selectCourses = (isCourse: boolean) => {
    setCourses(isCourse);
  };

  const titleText = courses ? 'Cursos' : 'Certificados';
  const selectedList = courses ? USER.courses : USER.certificates;
  return address ? (
    <div>
      <div className={style.logo}></div>
      <div className={style.user}>
        <img src={USER.img} alt="profile img" />
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
  ) : (
    <div>Conectar Wallet</div>
  );
};

export default Profile;
