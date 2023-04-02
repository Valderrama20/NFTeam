import { CARRUSEL } from "../../utils/constants"
import style from "./Carrusel.module.css"


const Carrusel = () => {
     return <div>
       
       <div className={style.slider}>
	<div className={style.slide_track}>

		{CARRUSEL.map(e => <div className={style.slide}>

		</div>)}
		
		
	</div>
</div>
   

     </div>
}

export default Carrusel