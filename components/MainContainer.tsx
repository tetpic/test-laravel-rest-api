import Head from "next/head"
import Link from "next/link"
import {FC, ReactNode, useState } from "react"
import { mainContainerType } from "../types"



// function openNavigation() {
//     let navBarWrapper = document.querySelector('.main-navigation__wrapper')??undefined
//     if (!navBarWrapper) {return false}
//     let button = navBarWrapper.querySelector(".main-navigation__open")
//     let navBar = navBarWrapper.querySelector('.main-navigation')
//     // button.addEventListener('click', ()=>{
//         navBar.classList.toggle('main-navigation_active')
//     // }
// }


const MainContainer:FC<mainContainerType> = ({children, keys, title}) => {
    const [opened, setOpened] = useState(false);

  return (
    <>
        <Head>
            <meta name="keywords" content={"my NEXT.js project" + keys}></meta>
            <title>{title}</title>
        </Head>
        <div className="main-navigation__wrapper">

        <nav className={opened? "main-navigation main-navigation_active": 'main-navigation'}>
            <Link href="/" className="main-navigation__link">
                Main
            </Link>
            <Link href="/users" className="main-navigation__link">
                Users
            </Link>  
            <Link href="/login" className="main-navigation__link">
                Login
            </Link>
        </nav>
        <button className={opened? "main-navigation__open main-navigation__open_opened": "main-navigation__open"} 
        onClick={(state)=>{
            opened ? setOpened(false): setOpened(true)
            }}>
            <div className="main-navigation__burger-line"></div>
            <div className="main-navigation__burger-line"></div>
            <div className="main-navigation__burger-line"></div>
        </button>
        </div>
        <div>
            {children}
        </div>
    </>
  )
}



export default MainContainer

