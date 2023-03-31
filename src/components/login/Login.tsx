import useWallet from '../../hooks/useWallet';
import { useState } from 'react';
import style from './Login.module.css';
import { UserType } from '../../types';
import useCedalio from '../../hooks/useCedalio';
import axios from 'axios';
import { useSigner } from '@thirdweb-dev/react';

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

  const url = 'https://kod-nft-certificates.gateway.cedalio.dev/auth';
  const handleAuth = async () => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (data.nonce && signer) {
      const message = 'Firmar Por favor:';
      const signature = await signer.signMessage(`${message}${data.nonce}`);
      console.log('signature ', signature);

      const body = {
        message,
        signature: signature.substring(2),
        nonce: data.nonce,
        account: address,
      };

      const response = await fetch(`${url}/verify`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const token = await response.json();

      console.log({ token });
    }
  };

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
        <button onClick={handleAuth} type="button">
          Auth
        </button>
      </div>
    </form>
  ) : null;
};

export default Login;
