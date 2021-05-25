import React from 'react'
import Style from '../styles/SearchComponent.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
function SearchComponent() {
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
                   <select name="" id="" className="select">
                       <option value="">Seriya nömrəsi</option>
                       <option value="">3 seriya</option>
                       <option value="">4 seriya</option>
                       <option value="">5 seriya</option>
                       <option value="">7 seriya</option>
                   </select>
               </div>
               <div>
                   <select name="" id="">
                       <option value="">Kuza nömrəsi</option>
                   </select>
               </div>
               <div>
                   <select name="" id="">
                       <option  value="">Kateqoriya</option>
                       <option value="">Kateqoriya</option>
                       <option value="">Kateqoriya</option>
                       <option value="">Kateqoriya</option>
                   </select>
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
