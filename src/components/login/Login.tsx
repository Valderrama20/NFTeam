import style from './Login.module.css';

type LoginType = {
  isOpen: boolean;
};

const Login = ({ isOpen }: LoginType) => {
  return isOpen ? (
    <form action="" className={style.form}>
      <div>
        <div className={style.input}>
          <label htmlFor="">Full Name</label>
          <input type="text" />
        </div>   
        <div className={style.input}>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  ) : null;
};

export default Login;
