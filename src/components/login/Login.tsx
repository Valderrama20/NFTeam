import useWallet from '../../hooks/useWallet';
import { useState } from 'react';
import style from './Login.module.css';

type LoginType = {
  isOpen: boolean;
};

const Login = ({ isOpen }: LoginType) => {
  const { handleConnect, isLoading, isConnected } = useWallet();
  const [dataUser, setDataUser] = useState({ fullName: '', email: '' });

  const setData = (data: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({ ...dataUser, [data.target.name]: data.target.value });
  };

  const onConnect = async () => {
    if (!isConnected) {
      // CEDALIO SUBMIT USER DATA
    }
    await handleConnect();
  };

  const textConnect = isConnected ? 'Disconnect' : 'Connect Wallet';

  return isOpen ? (
    <form action="" className={style.form}>
      <label htmlFor="">register</label>
      <div>
        <div className={style.input}>
          <label htmlFor="">Full Name</label>
          <input type="text" name="fullName" onChange={setData} />
        </div>
        <div className={style.input}>
          <label htmlFor="">Email</label>
          <input type="text" name="email" onChange={setData} />
        </div>
      </div>
      <div>
        <button className={style.btn} type="button" onClick={onConnect}>
          {isLoading ? 'Loading' : textConnect}
        </button>
      </div>
    </form>
  ) : null;
};

export default Login;
