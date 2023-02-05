import Head from "next/head"
import Link from "next/link"
import MainContainer from "../components/MainContainer"
import { FC } from "react"



// TODO: прописать .env используя npm dotenv, и в последующем использовать переменные окружения
const Index = () => {
    return (
        <MainContainer >
            <div>
                <h1>
                    Main page
                </h1>
            </div>
       </MainContainer>
    )
}

export default Index