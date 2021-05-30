import React, { lazy } from 'react'
import Style from '../styles/Car.module.css'
import Image from 'next/image'
const Car = ({kuza}) => {
    function image(){
        return  `https://bmwpartsbaku.az/public/${kuza.mainimage}`
    }
    return (
  <>
            <div>
            <div className={Style.imageCars}>
            <Image loader={image} 
                    src={`https://bmwpartsbaku.az/public/${kuza.mainimage}`}
                    alt="Picture of the author"
                    height={201}
                    width={401}
                   
                    objectFit="cover"
                  
                />
            </div>


            <div className={Style.content}>
    <h3>{kuza.model}</h3>
                <p>Kuza nömrəsi:  {kuza.model}</p>
                <p>İli: {kuza.year}</p>
                <p>Alınma tarixi:  {kuza.purchase_date}</p>
                <p>Hansı ölkədən gətirilib: {kuza.caoyntry}</p>



            </div>

           </div>

   
           
     </> 
    )
}

export default Car
