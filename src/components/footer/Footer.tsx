import style from './Footer.module.css'

const Footer = () => {
  return <div className={style.father}>
     <div className={style.one}>
        <p>Subcribete a nuestro newsletter</p>
     </div>
     <div className={style.two}>
        <div className={style.btn}>
              <input type="text" placeholder='Cual es tu email'/>
              <button>🡲</button>
        </div>
     </div>
     <div className={style.three}>
      <div>
       <p>Project</p> 
        <ul>
            <li>About US</li>
            <li>Blog</li>
            <li>For Bussines</li>
        </ul>
      </div>
      <div>
        <p>Help</p> 
         <ul>
            <li>FAQ</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
         </ul>
      </div>
      <div>
        <p>Sociales</p> 
        <ul>
            <li>Twitter</li>
            <li>Discord</li>
            <li>Github</li>
            <li>Telegram</li>
        </ul>
      </div>
     </div>
  </div>
}


export default Footer