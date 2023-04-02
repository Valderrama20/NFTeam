import Footer from '../components/footer/Footer';
import style from './Home.module.css'
import Carrusel from '../components/carrusel/Carrusel';
import InfoCard from '../components/infoCard/InfoCard';
import { DATA_CARD } from '../utils/constants';


const Home = () => {
 

  return <div className={style.father}>
    <div>
      <div className={style.container}>
      <div className={style.title}>
        <div>
           <h1> Crea tus cursos </h1>
        <p>
         Vincula tus cursos a nuestra plataforma y  <br /> permite que tus usuarios 
         registren su progreso con un NFT   dinámico  que irà evolucionado a la par 
         de su aprendizaje
        </p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dlwurkglp/image/upload/v1680456791/Group_29_agk5fu.png" alt="" />
        </div>
     </div>
     </div> 

      <div className={style.characteristics}>
      <h3>Algunas características de nuestro modelo de aprendizaje</h3>
         <div className={style.details}>
            {DATA_CARD.map(e => <InfoCard data={e}/> )}
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
