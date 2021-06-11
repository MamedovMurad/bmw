import React, {useState,useEffect} from 'react'
import Style from '../styles/Header.module.css'
import Navbar from './Navbar'
import SearchComponent from './SearchComponent'
import { useRouter } from 'next/router'

function Header() {
    const [width, setwidth] = useState(800)
    useEffect(() => {
        setwidth(window.innerWidth);
    }, [])
console.log(width);
    const router = useRouter()
    return (
       <>
            <div className={Style.headerNavbar} >
                <Navbar />

               {router.pathname!='/avtomobiller' && <SearchComponent />}
               {width<=700 && <SearchComponent />}
               
            </div>
       </>
    )
}

export default Header
