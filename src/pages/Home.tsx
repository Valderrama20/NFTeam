import {
  useAddress,
  useMetamask,
  useLogin,
  useLogout,
  useUser,
  ConnectWallet,
} from '@thirdweb-dev/react';

const Home = () => {
  const { user, isLoggedIn } = useUser();

  return (
    <div>
      <ConnectWallet />
    </div>
  );
};

export default Home;
