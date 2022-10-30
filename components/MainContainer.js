import Head from "next/head"
import Link from "next/link"


function MainContainer({children, keywords, title}) {
  return (
    <>
        <Head>
            <meta keywords={"my NEXT.js project" + keywords}></meta>
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

