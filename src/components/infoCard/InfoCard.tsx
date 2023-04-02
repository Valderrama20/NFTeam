import style from './InfoCard.module.css';

const InfoCard = ({ data }: any) => {
  return (
    <div className={style.card}>
      <div className={style.png}>
        <img src={data.png} alt="" />
      </div>
      <div className={style.title}>{data.title}</div>
      <div className={style.text}>{data.text}</div>
    </div>
  );
};

export default InfoCard;
