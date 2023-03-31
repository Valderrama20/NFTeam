import style from "./Profile.module.css"

const Cars = ({data}:any) => {
const {img,course,red,percentage} = data
console.log(data)
    return <div className={style.cars}>
         <img src={img} alt="" />
         <div className={style.data}>
          <h3 >{course}</h3>
          <p>{red}</p>
         </div>
         <label htmlFor="">{percentage}</label>
    </div>
}

export default Cars