import React ,{useState,useEffect} from 'react'
import Style from '../styles/BodyBanner.module.css'
import BmwPartsCard from './BmwPartsCard'
import BodyImage from './BodyImage'

const BodyBanner = () => {


const [products, setproducts] = useState([])
    useEffect(async() => {
        const res = await fetch('https://bmwpartsbaku.az/public/api/products')
         const product= await res.json();
       
         setproducts(product);
     
        
      
       },[])
    return (
<div className={Style.first}>
    
    <BodyImage/>
<div className={Style.bodyBanner}>
    
            <div>
            {products.map((e,index)=>(
                <BmwPartsCard key={index} data={e}/>
           ))}
            </div>
         
        </div>
</div>
    )
}

export default BodyBanner
