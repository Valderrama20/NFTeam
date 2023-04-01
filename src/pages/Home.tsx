import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import Footer from '../components/footer/Footer';
import style from './Home.module.css'

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

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;


  return <div className={style.father}>
    <div>
      <div className={style.container}>
     <div className={style.title}>
      <h1>Crea tus certificados <br />
          Dinamicos
      </h1>
     </div>
        <div className={style.details}>

       </div>
        </div>  
        <div className={style.detailsTwo}>
        <h3>Revisa tu <br /> progreso</h3>
         <img src="https://res.cloudinary.com/dlwurkglp/image/upload/v1680383739/Dise%C3%B1o_sin_t%C3%ADtulo_yjs39h.gif" alt="" />
     </div>
     </div>

   <Footer/>
  </div>;
};

export default Home;
