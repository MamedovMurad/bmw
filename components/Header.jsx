import React from 'react'
import Style from '../styles/Header.module.css'
import Navbar from './Navbar'
import SearchComponent from './SearchComponent'
function Header() {
    return (
       <>
            <div className={Style.headerNavbar}>
                <Navbar/>
                <SearchComponent/>
            </div>
       </>
    )
}

export default Header
