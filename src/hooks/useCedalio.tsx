import { gql, useMutation } from '@apollo/client';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CREATE_USER = gql`
  mutation CreateUser(
    $id: UUID!
    $fullname: String!
    $email: String!
    $type: String!
    $status: String
  ) {
    createUser(
      user: {
        id: $id
        email: $email
        fullname: $fullname
        type: $type
        status: $status
      }
    ) {
      user {
        id
        email
        type
        status
      }
    }
  }
`;

type Value<T> = T | undefined;

const useCedalio = ({
  address,
  token,
}: {
  address: string;
  token: Value<string>;
}) => {
  const [contractAddress, setContractAddress] = useState('');
  const [deployed, setDeployed] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [uri, setUri] = useState('');
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  async function requestDeployToGateway(address: string) {
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
      const data = await response.json();

      console.log({ data });

      // axios
      //   .post(url, payload)
      //   .then(function (response: any) {
      //     localStorage.setItem('deploymentId', response.data.deployment_id);
      //     localStorage.setItem(
      //       'contractAddress',
      //       response.data.contract_address
      //     );
      //     localStorage.setItem('deployed', 'true');
      //     setContractAddress(response.data.contract_address);
      //     setDeployed(true);

      //     setUri(
      //       `${String(import.meta.env.VITE__GRAPHQL_GATEWAY_BASE_URL)}/${
      //         response.data.deployment_id
      //       }/graphql`
      //     );
      //   })
      //   .catch(function (error: any) {
      //     console.log(error);
      //   });
    }
  }

  useEffect(() => {
    const deployed = Boolean(localStorage.getItem('deployed'));
    const contractAddress = localStorage.getItem('contractAddress');
    const deploymentId = localStorage.getItem('deploymentId');
    if (deployed && contractAddress && deploymentId) {
      setUri(
        `${String(
          import.meta.env.VITE__GRAPHQL_GATEWAY_BASE_URL
        )}/${deploymentId}/graphql`
      );
      setDeployed(deployed);
      setContractAddress(contractAddress);
    } else if (address) {
      requestDeployToGateway(address);
    } else {
      return;
    }
  }, [address]);

  return { requestDeployToGateway };
};

export default useCedalio;
