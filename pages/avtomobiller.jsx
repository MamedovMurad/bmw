import React, { useState ,useEffect} from 'react'
import BodyImage from '../components/BodyImage'
import Car from '../components/Car'
import Layout from '../components/Layout'
import Style from '../styles/Car.module.css'

const Cars = (cars) => {
  const [data, setdata] = useState([]);


  useEffect(async() => {
   const res = await fetch('https://bmwpartsbaku.az/public/api/car')
    const cars= await res.json();
  
   setdata(cars);

   
 
  },[])
    
  
    return (
    <Layout>
   <BodyImage/>
<div className="custom_wrapper">

{data.length<1 && <div className={Style.spinnerParent}>
<div className={Style.spinner}></div>
</div>}

<div className={Style.parentelement}>

  {data.map((item,index)=>(<Car key={item.id} kuza={item}/>))} 
</div>
</div>
    </Layout>
    )
}


export default Cars
