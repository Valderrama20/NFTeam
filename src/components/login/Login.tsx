import useWallet from '../../hooks/useWallet';
import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import useCedalio from '../../hooks/useCedalio';
import { useSigner } from '@thirdweb-dev/react';
import { handleAuth } from '../../apis';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useState } from 'react';

/**
 * handleAuth Devuelve un token para utilizar en Cedalio.
 *
 * @param {signer} signer El signer de la wallet conectada
 * @param {address} address La wallet address del usuario
 * @return {token} token es un codigo devuelto por el server de Cedalio para poder deployar una base de datos.
 */

const Login = ({ isOpen, setOpen }: any) => {
  const { handleConnect, isLoading, isConnected, address } = useWallet();
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token', '');
  const [fullName, setFullName] = useLocalStorage('fullName', '');
  const [email, setEmail] = useLocalStorage('email', '');
  const { requestDeployToGateway } = useCedalio();
  const [isAuthLogin, setIsAuthLogin] = useState(false);
  const signer = useSigner();

  const onSetName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const onSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onConnect = async () => {
    await handleConnect();
  };

  const onAuth = async () => {
    if (address && signer) {
      setIsAuthLogin(true);
      const token = await handleAuth(signer!, address);
      await requestDeployToGateway(address, token);
      setToken(token);
      setOpen(false);
      setIsAuthLogin(false);
      navigate('profile');
    }
  };

  const textGenerator = () => {
    if (isLoading) return 'Connecting';
    if (!isConnected) return 'Connect Wallet';
    return 'Disconnect';
  };

  const showSign = () => {
    if (token) return false;
    if (!address) return false;
    if (!signer) return false;
    return true;
  };

  return isOpen ? (
    <div className={style.fondo}>
      <div className={style.form}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '50px',
          }}
        >
          <button className={style.button} onClick={setOpen}>
            X
          </button>
        </div>
        <label className={style.title}>register</label>
        <div>
          <div className={style.input}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={onSetName}
            />
          </div>
          <div className={style.input}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={onSetEmail}
            />
          </div>
        </div>
        <div className={style.btnContainer}>
          <button className={style.btn} type="button" onClick={onConnect}>
            {textGenerator()}
          </button>
          {showSign() && (
            <button className={style.btn} type="button" onClick={onAuth}>
              {isAuthLogin ? 'Deploying' : 'Sign Wallet'}
            </button>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
