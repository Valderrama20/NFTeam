import { test } from "node:test"
import style from "./Progress.module.css"

const Progress = ({set}:{set: () => void}) => {


const tests = [
    {name:"introduccion a cripto"},
    {name:"Que es Web3"},
    {name:"Bitcoin"},
    {name:"Ethereum"},
    {name:"que es DeFi"},
    {name:"Poops y NFTs"},
]


    return <div className={style.father}>
        <button onClick={set}>X</button>
        <div className={style.name}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CsvwaHmsHJq9ArE1RIyczPhmWqkMNGeQ9A&usqp=CAU" alt="" />
             <h3>Solow</h3>
        </div>
        <div className={style.tests}>
            <div className={style.line}></div>
           <div className={style.left}>
           {
           tests.map(e => <div>
            10%
           </div> )
           }

           </div>
           <div className={style.right}>
            {tests.map(e => 
                <div className={style.progress}>
                   <p className={style.p}>{e.name}</p>
                   <button>Realizar Examen</button>
                </div>
            )}
           </div>
        </div>
     
       
    </div>
}

export default Progress