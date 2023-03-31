import { useState } from 'react';
import { useDisconnect, useMetamask, useAddress } from '@thirdweb-dev/react';

const useWallet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const disconnect = useDisconnect();
  const connectWithMetamask = useMetamask();
  const address = useAddress();

  const shortAddress = address
    ? `${address.slice(0, 4)}...${address.slice(-4)}`
    : '';
  const isConnected = address ? true : false;

  const handleConnect = async () => {
    try {
      setIsLoading(true);

      if (address) {
        await disconnect();
      } else {
        await connectWithMetamask();
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  return {
    handleConnect,
    shortAddress,
    address: address ?? '',
    isLoading,
    isConnected,
  };
};

export default useWallet;
