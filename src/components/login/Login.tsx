import { useState } from 'react';
import style from './Login.module.css';

type LoginType = {
  isOpen: boolean;
};


 
const Login = ({ isOpen }: LoginType) => {

    const [dataUser, setDataUser] = useState({fullName:"", email:""})

const setData = (data: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({...dataUser,[data.target.name]:data.target.value})
}
  return isOpen ? (
    <form action="" className={style.form}>
        <label htmlFor="">register</label>
      <div>
        <div className={style.input}>
          <label htmlFor="">Full Name</label>
          <input type="text" name="fullName" onChange={setData}/>
        </div>   
        <div className={style.input}>
          <label htmlFor="">Email</label>
          <input type="text" name="email" onChange={setData}/>
        </div>
      </div>
      <div >
        <input type="submit" className={style.btn} />
      </div>
    </form>
  ) : null;
};

export default Login;
