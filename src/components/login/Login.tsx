import useWallet from '../../hooks/useWallet';
import style from './Login.module.css';

type LoginType = {
  isOpen: boolean;
};

const Login = ({ isOpen }: LoginType) => {
  const { handleConnect, isLoading, isConnected } = useWallet();

  const onConnect = async () => {
    if (!isConnected) {
      // CEDALIO SUBMIT USER DATA
    }
    await handleConnect();
  };

  const textConnect = isConnected ? 'Disconnect' : 'Connect Wallet';

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
        <button type="button" onClick={onConnect}>
          {isLoading ? 'Loading' : textConnect}
        </button>
      </div>
    </form>
  ) : null;
};

export default Login;
