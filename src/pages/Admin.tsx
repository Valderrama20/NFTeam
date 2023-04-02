import { useState, useEffect } from 'react';
import style from '../styles/Profile.module.css';
import { MODULES, USER_IMG } from '../utils/constants';
import Module from '../components/module/Module';

const Admin = () => {
  const [modules, setModules] = useState<any>([]);

  useEffect(() => {
    setModules(MODULES);
  }, []);

  return (
    <div>
      <div className={style.logo}></div>
      <div className={style.user}>
        <img src={USER_IMG} alt="profile img" />
        <label htmlFor="">Admin</label>
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
