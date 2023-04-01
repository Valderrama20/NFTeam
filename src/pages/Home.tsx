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
  // const { loading, error, data } = useQuery(GET_USER);
  // const [userData, setUserData] = useState('');

  // useEffect(() => {
  //   if (data) setUserData(data.allUserDatas);
  // }, [data]);

  return <div>HOME PAGE</div>;
};

export default Home;
