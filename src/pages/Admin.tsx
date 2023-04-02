import { useState, useEffect } from 'react';
import style from '../styles/Profile.module.css';
import { USER } from '../utils/constants';
import Card from '../components/profile/Card';
import useWallet from '../hooks/useWallet';
import Module from '../components/module/Module';

const Admin = () => {
  const [courses, setCourses] = useState<any>([]);
  const [modules, setModules] = useState<any>([]);
  const { address } = useWallet();

  useEffect(() => {
    setCourses(USER.courses);
    setModules(USER.modules)
  }, []);

  return (
    <div>
      <div className={style.logo}></div>
      <div className={style.user}>
        <img src={USER.img} alt="profile img" />
        <label htmlFor="">{`${USER.fullname}`}</label>
      </div>
      <div className={style.certificates}>
        <div className={style.barra}>
          <p className={style.p}>Intro Crypto Modulos</p>
        </div>

        <div className={style.nfts}>
          {modules.map((module, i) => (
            <Module name={module.name} img={module.img}></Module>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
