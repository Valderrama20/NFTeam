import style from "./InfoCard.module.css"


const InfoCard = ({data}: any) => {
    console.log(data)
    return <div className={style.card}> 
        <div className={style.stickers}></div>
        <div className={style.title}>{data.title}</div>
        <div className={style.text}>{data.text}</div>
    </div>
}

export default InfoCard