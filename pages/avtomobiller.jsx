import React, { useState ,useEffect} from 'react'
import BodyImage from '../components/BodyImage'
import Car from '../components/Car'
import Layout from '../components/Layout'
import Style from '../styles/Car.module.css'
import { Modal, Button } from 'antd';

const Cars = (cars) => {
  const [visible, setVisible] = useState(false);
  const [data, setdata] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [imagesIndex, setimagesIndex] = useState(0);
 const getData = async()=>{
  const res = await fetch('https://bmwpartsbaku.az/public/api/car')
  const cars= await res.json();

 setdata(cars);
 }

  useEffect( ()=>{

    getData()
   
 
  },[])
    
  
    return (
    <Layout>
   <BodyImage title="Avtomobillər"/>
<div className="custom_wrapper">

{data.length<1 && <div className={Style.spinnerParent}>
<div className={Style.spinner}></div>
</div>}

<div className={Style.parentelement}>

<Modal
     /*    title="Modal 1000px width" */
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={null}
      >
        	
       <span className={Style.icons,Style.prev} 
       onClick={()=>{0>=imagesIndex?setimagesIndex(data[modalIndex].images.length-1): setimagesIndex(imagesIndex-1)}}
       >prev</span>
   { data.length>0 &&   <img src={"https://bmwpartsbaku.az/"+data[modalIndex].images[imagesIndex].name} alt="" width="100%"/> }

        <span className={Style.icons} onClick={()=>{data[modalIndex].images.length<=imagesIndex+1?setimagesIndex(0): setimagesIndex(imagesIndex+1)}}>next</span>

        <div className={Style.modalFooter}>

        </div>
      </Modal>

  {data.map((item,index)=>(<Car key={item.id} kuza={item}  setModalIndex={setModalIndex} index={index} setvis={setVisible}  /> ))} 
</div>
</div >
    </Layout>
    )
}


export default Cars
