import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Style from '../styles/HomeWrapper.module.css'
const HomeWrapper = () => {
    return (
        <div className="custom_wrapper">
            <div className={Style.parentEl}>
                <ul>
                    <li>
                            <Image
                            src="/uploads/categ1.png"
                            alt="Picture of the author"
                            width={611}
                            height={234}
                        />
                        <h3>3-cü seriya</h3>
                        <Link href="/Katalog">
                        <a>Hamsına bax</a>
                        </Link>
                    </li>
                   
                    <li>
                            <Image
                            src="/uploads/categ2.png"
                            alt="Picture of the author"
                            width={611}
                            height={234}
                        />
                        <h3>3-cü seriya</h3>
                        <Link href="/Katalog">
                        <a>Hamsına bax</a>
                        </Link>
                    </li>

                    <li>
                            <Image
                            src="/uploads/categ4.png"
                            alt="Picture of the author"
                            width={611}
                            height={234}
                        />
                        <h3>3-cü seriya</h3>
                        <Link href="/Katalog">
                        <a>Hamsına bax</a>
                        </Link>
                    </li>

                    <li>
                            <Image
                            src="/uploads/categ5.png"
                            alt="Picture of the author"
                            width={611}
                            height={234}
                        />
                        <h3>3-cü seriya</h3>
                        <Link href="/Katalog">
                        <a>Hamsına bax</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomeWrapper
