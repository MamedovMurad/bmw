import React from 'react'
import Style from '../styles/BodyBanner.module.css'
import Link from 'next/link'
const BodyImage = () => {
    return (
        <div>
          <div className={Style.bkEffect}>
                <ul className={Style.quickLink}>
                    <li>
                    <Link href="/">
                    <a>Əsas səhifə</a>
                    </Link>
                    </li>
                    <li>|</li>
                    <li>
                    <span>Katoloq</span>
                    </li>
                </ul>
           
            </div>
        </div>
    )
}

export default BodyImage
