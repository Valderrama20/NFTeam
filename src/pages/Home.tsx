import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

const GET_USER = gql`
  query GetUSER {
    allUserDatas {
      id
      fullname
      email
      type
      status
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_USER);
  const [userData, setUserData] = useState('');

  useEffect(() => {
    if (data) setUserData(data.allUserDatas);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(userData);
  return <div>IS WORKING</div>;
};

export default Home;
