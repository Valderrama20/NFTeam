import Footer from '../components/footer/Footer';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.father}>
      <div>
        <div className={style.container}>
          <div className={style.title}>
            <h1>
              Crea tus certificados <br />
              Dinamicos
            </h1>
          </div>
          <div className={style.details}></div>
        </div>
        <div className={style.detailsTwo}>
          <h3>
            Revisa tu <br /> progreso
          </h3>
          <img
            src="https://res.cloudinary.com/dlwurkglp/image/upload/v1680383739/Dise%C3%B1o_sin_t%C3%ADtulo_yjs39h.gif"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
