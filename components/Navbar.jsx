import React, { useState ,useContext,useEffect} from 'react';
import style from '../styles/Navbar.module.css'
import Link from 'next/link'
import { Context } from "../context/Context";
import Image from 'next/image'
const Navbar = (props) => {

    const [context, setContext] = useContext(Context);


/* test */
 
  const  cehckLang=()=>{
    if(window.sessionStorage.getItem('lang')!="ru"){
        window.sessionStorage.setItem('lang','ru');
        setContext("ru") 
      }  else{
        window.sessionStorage.setItem('lang','az');
        setContext("az") 
        } 
 
  } 

  useEffect(() => {
    if(window.sessionStorage.getItem('lang')=="ru"){
     
        setContext("ru") 
      }  else{
       
        setContext("az") 
        }  
   
  }, [cehckLang])
    return (
        <div className={style.nav}>
            <ul>
            <div>
                <Link href="/">
              <a>   <Image
                    src="/uploads/logo.png"
                    alt="Picture of the author"
                    width={211}
                    height={60}
                /></a>
                </Link>
                </div>
                <li>
                <Link href="/">
               {context=='az'? <a>Əsas səhifə</a> : <a>Главная страница</a>}
                </Link>
                </li>
                <li>
                <Link href="/Katalog">
                {context=='az'? <a>Kataloq</a> : <a>Каталог</a>}
               
                </Link>
                </li>
               
                <li>
                <Link href="/avtomobiller">
                {context=='az'? <a>Avtomobillər</a> : <a>Легковые автомобили</a>}
              
                </Link>
                </li>
                <li>
                <Link href="/nece-almaq">
           
                {context=='az'? <a>Necə almaq</a> : <a>     Как купить</a>}
                
                </Link>
                </li>
                <li>
                <Link href="/contact">
             
                
                {context=='az'? <a>Əlaqə</a> : <a>   Контакт</a>}
                </Link>
                </li>
            </ul>
            <ul>
    <li onClick={cehckLang}>{context=='az' ? 'RU':'AZ'}</li>
            </ul>
        </div>
    )
}

export default Navbar
