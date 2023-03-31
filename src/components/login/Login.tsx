import style from "./Login.module.css"

export default function () {
 
    
    return <form action="" className={style.form}>
        <div>  
            <div className={style.input}>
                <label htmlFor="">Full Name</label>
               <input type="text" />
            </div>
            <div className={style.input}>
                <label htmlFor="">Email</label>
             <input type="text" />
            </div>
        </div>
        <div>
          <input type="submit" />
        </div>
     
     </form>
}