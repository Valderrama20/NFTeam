import useWallet from '../../hooks/useWallet';
import { useState } from 'react';
import style from './Login.module.css';
import { UserType } from '../../types';
import useCedalio from '../../hooks/useCedalio';
import { useSigner } from '@thirdweb-dev/react';
import { handleAuth } from '../../apis';
import useLocalStorage from '../../hooks/useLocalStorage';

type LoginType = {
  isOpen: boolean;
};

const Login = ({ isOpen }: LoginType) => {
  const { handleConnect, isLoading, isConnected, address } = useWallet();
  const [token, setToken] = useLocalStorage('token', '');
  const [fullName, setFullName] = useLocalStorage("fullName","")
  const [emails, setEmails] = useLocalStorage("email","")
  const { requestDeployToGateway } = useCedalio({ address, token });
  const signer = useSigner();


  const setName = (event:React.ChangeEvent<HTMLInputElement>, ) => {
   setFullName(event.target.value)
  }

  const setEmail = (event:React.ChangeEvent<HTMLInputElement>, ) => {
    setEmails(event.target.value)
   }
 
  const onConnect = async () => {
    await handleConnect();
  };

  const onAuth = async () => {
    if (address && signer) {
      const token = await handleAuth(signer!, address);
      setToken(token);
    }
  };

  const textGenerator = () => {
    if (isLoading) return 'Connecting';
    if (!isConnected) return 'Connect Wallet';
    return 'Disconnect';
  };

  return isOpen ? (
    <form action="" className={style.form}>
      <label htmlFor="">register</label>
      <div>
        <div className={style.input}>
          <label htmlFor="">Full Name</label>
          <input type="text" name="fullName" onChange={setName} />
        </div>
        <div className={style.input}>
          <label htmlFor="">Email</label>
          <input type="text" name="email" onChange={setEmail} />
        </div>
      </div>
      <div className={style.btnContainer}>
        <button className={style.btn} type="button" onClick={onConnect}>
          {textGenerator()}
        </button>
        {!token && (
          <button className={style.btn} type="button" onClick={onAuth}>
            Sign Wallet
          </button>
        )}
      </div>
    </form>
  ) : null;
};

export default Login;
