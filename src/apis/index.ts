import { URL_CEDALIO } from '../utils/constants';
import { Signer } from 'ethers';

export const handleAuth = async (
  signer: Signer,
  address: string
): Promise<string> => {
  const response = await fetch(URL_CEDALIO, {
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
    const body = {
      message,
      signature: signature.substring(2),
      nonce: data.nonce,
      account: address,
    };

    const response = await fetch(`${URL_CEDALIO}/verify`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const token = await response.json();
    return token.token;
  }
  return '';
};
