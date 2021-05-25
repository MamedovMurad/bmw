import React from 'react'
import Style from '../styles/Car.module.css'
import Image from 'next/image'
const Car = ({kuza}) => {
    
    return (
  <>
            <div>
            <div className={Style.imageCars}>
            <Image
                    src="/uploads/car.png"
                    alt="Picture of the author"
                    width={401}
                    height={201}
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
