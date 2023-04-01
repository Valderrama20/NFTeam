import style from "./ModifiqueInfoUser.module.css"


 const ModifiqueInfoUser = () => {
    return <div className={style.setUser}>
        <h3></h3>
        <div className={style.img}>
            <div className={style.one}></div>
            <div className={style.two}></div>
        </div>
        <div className={style.data}>
            <div>
                <label htmlFor="">Nombre De Usuario:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="text" />
            </div>
           <div>
           <button>Enviar</button>
           </div>
            
        </div>
    </div>
 }

 export default ModifiqueInfoUser