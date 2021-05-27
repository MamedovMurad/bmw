import React from 'react'
import Style from '../styles/SearchComponent.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Select } from 'antd';
function SearchComponent() {

function handleChange(value) {
  console.log(`selected ${value}`);
}


const router = useRouter()

    return (
        <div className={Style.searchArea}>
            <div className="logo_small">
            <Image
        src="/uploads/2.svg"
        alt="Picture of the author"
        width={114}
        height={83}
      />
         {/*    <svg width="114" height="84" viewBox="0 0 114 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 83.5L114 0.5H11C4.92487 0.5 0 5.42487 0 11.5V83.5Z" fill="#512DAB"/>
            <path d="M0 83.5L114 0H67L0 48.5V83.5Z" fill="#F60100"/>
            </svg> */}


            </div>
           <form action="">
               <div>
               {/*     <select name="" id="" className="select">
                       <Select.option value="">Seriya nömrəsi</Select.option>
                       <Select.option value="">3 seriya</Select.option>
                       <Select.option value="">4 seriya</Select.option>
                       <Select.option value="">5 seriya</Select.option>
                       <Select.option value="">7 seriya</Select.option>
                   </select> */}

<Select defaultValue="Seriya nömrəsi"  className={Style.CustomSelect} onChange={handleChange}>
      <Select.Option value="3 seriya">3 seriya</Select.Option>
      <Select.Option value="4 seriya">4 seriya</Select.Option>
      <Select.Option value="5 seriya">5 seriya</Select.Option>
      <Select.Option value="7 seriya">7 seriya</Select.Option>
      
</Select>

               </div>
               <div>
                   {/* <select name="" id="">
                       <Select.option value="">Kuza nömrəsi</Select.option>
                   </select> */}


<Select defaultValue="Kuza nömrəsi"  className={Style.CustomSelect} onChange={handleChange}>
      <Select.Option value="Kuza nömrəsi">Kuza nömrəsi</Select.Option>
     
      <Select.Option value="Kuza nömrəsi2">yiminghe</Select.Option>
</Select>
               </div>
               <div>
               <Select defaultValue="Kuza nömrəsi"  className={Style.CustomSelect} onChange={handleChange}>
                <Select.Option value="Kuza nömrəsi1">Kuza nömrəsi</Select.Option>
                <Select.Option value="Kuza nömrəsi2">Kuza nömrəsi</Select.Option>
                <Select.Option value="Kuza nömrəsi3">Kuza nömrəsi</Select.Option>
                <Select.Option value="Kuza nömrəsi4">Kuza nömrəsi</Select.Option>
              
            </Select>
               </div>
               <div>
                  <button type="button" onClick={()=>{
                      router.push({
                          pathname:'/Katalog',
                          query:{q:'5',gg:'99'},
                          
                      })
                  }}>
                <Image
                   src="/uploads/Search.svg"
                   alt="Picture of the author"
                   width={39.5}
                   height={39.6}
                />
                  </button>
               </div>
           </form>
        </div>
    )
}

export default SearchComponent
