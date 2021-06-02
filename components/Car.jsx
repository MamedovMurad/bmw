import React ,{useContext} from 'react'
import Style from '../styles/Car.module.css'
import Image from 'next/image'
import moment from 'moment'
import { Context } from "../context/Context";

const Car = ({kuza,setvis,setModalIndex, index}) => {
    console.log(setvis)
    const [lang, setlang] = useContext(Context);
    moment.locale(lang)
    function image(){
        return  `https://bmwpartsbaku.az/public/${kuza.mainimage}`
    }
    return (
  <>
            <div onClick={()=>{setvis(true),setModalIndex(index)}}>
            <div className={Style.imageCars}>
            <img 
                    src={`https://bmwpartsbaku.az/public/${kuza.mainimage}`}
                    alt="Picture of the author"
                    height='201'
                    width="401"
                   style={{ objectFit:"cover"}}
                   
                  
                />
            </div>


            <div className={Style.content}>
          <h3>{kuza.model}</h3>
                <p>Kuza nömrəsi:  {kuza.model}</p>
                <p>İli: {kuza.year}</p>
                <p>Alınma tarixi: {moment(kuza.purchase_date).format('LL') } </p>
                <p>Hansı ölkədən gətirilib: {kuza.country}</p>



            </div>

           </div>

   
           
     </> 
    )
}

export default Car
