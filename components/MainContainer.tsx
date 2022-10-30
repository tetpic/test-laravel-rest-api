import Head from "next/head"
import Link from "next/link"
import {FC, ReactNode } from "react"
import { mainContainerType } from "../types"




const MainContainer:FC<mainContainerType> = ({children, keys, title}) => {
  return (
    <>
        <Head>
            <meta name="keywords" content={"my NEXT.js project" + keys}></meta>
            <title>{title}</title>
        </Head>
        <nav>
            <Link href="/">
                Main
            </Link>
            <Link href="/users">
                Users
            </Link>
        </nav>
        <div>
            {children}
        </div>
    </>
  )
}



export default MainContainer

