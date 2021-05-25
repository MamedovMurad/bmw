import React from 'react'
import Style from '../styles/Footer.module.css'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className={Style.footerArea}>
            <ul className={Style.footerFirstLine}>
                <li>
                <Link href="/">
                <a>Əsas səhifə</a>
                </Link>
                </li>
                <li>
                <Link href="/">
                <a>Kataloq</a>
                </Link>
                </li>
                <li>
                <Link href="/">
                <a>Avtomobillər</a>
                </Link>
                </li>
                <li>
                <Link href="/">
                <a>Necə almaq</a>
                </Link>
                </li>
                <li>
                <Link href="/">
                <a>Əlaqə</a>
                </Link>
                </li>
            </ul>




            <ul className={Style.footerFirstLine}>
                <li>
              <span>icon</span> +994 50 308 28 53 
                </li>
                <li>
             <span>icon</span> +994 55 771 12 25
                </li>
                <li>
                +994 50 610 00 17
                </li>
                <li>
                +994 77 251 55 55
                </li>
                <li>
           <span>icon</span> Bakı şəh., Babək prs. 74
                </li>
            </ul>
        </div>
    )
}

export default Footer
