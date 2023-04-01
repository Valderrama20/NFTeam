import useWallet from '../../hooks/useWallet';
import { useState } from 'react';
import style from './Login.module.css';
import { UserType } from '../../types';
import useCedalio from '../../hooks/useCedalio';
import { useSigner } from '@thirdweb-dev/react';
import { handleAuth } from '../../apis';

type LoginType = {
  isOpen: boolean;
};

const Login = ({ isOpen }: LoginType) => {
  const { handleConnect, isLoading, isConnected, address } = useWallet();
  const { requestDeployToGateway } = useCedalio({ address });
  const signer = useSigner();

  const [dataUser, setDataUser] = useState<UserType>({
    fullName: '',
    email: '',
  });

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
        <button onClick={() => handleAuth(signer!, address)} type="button">
          Auth
        </button>
      </div>
    </form>
  ) : null;
};

export default Login;
