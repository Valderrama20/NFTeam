import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { CREATE_USER } from '../graphql';

const useCedalio = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [deployed, setDeployed] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [uri, setUri] = useState('');
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  /**
   * requestDeployToGateway Realiza el deploy en una DB de cedalio.
   *
   * @param {address} address addres del usuario
   * @param {token} token Token generado por el handleAuth
   * @return {user} Internamete realiza un deploy y devuelve los datos de un usuario
   */
  async function requestDeployToGateway(address: string, token: string) {
    if (address) {
      const url = `${import.meta.env.VITE__GRAPHQL_GATEWAY_BASE_URL}/deploy`;
      const payload = {
        email: 'example.com',
        schema: `type UserData {
                id: UUID!
                fullname: String!
                email: String!
                type: String!
                status: String
              }
             
              `,
        schema_owner: address,
        network: 'polygon:mumbai',
      };
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const {
        contract_address,
        deployment_id,
      }: { contract_address: string; deployment_id: string } =
        await response.json();

      localStorage.setItem('deploymentId', deployment_id);
      localStorage.setItem('contractAddress', contract_address);
      localStorage.setItem('deployed', 'true');
      setContractAddress(contract_address);
      setDeployed(true);

      setUri(
        `${String(
          import.meta.env.VITE__GRAPHQL_GATEWAY_BASE_URL
        )}/${deployment_id}/graphql`
      );
    }
  }

  return { requestDeployToGateway };
};

export default useCedalio;
