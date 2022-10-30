import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"



export default function User ({user }) {
    const {query} = useRouter()
    return (
        <MainContainer keywords={user.name} title={user.name}>
            <div>
                <h1>
                    Пользователь с id {query.id} 
                </h1> 
                <div>
                    Имя пользователя {user.name} <br/>
                    Фамилия пользователя {user.surname} <br/>
                    Логин пользователя {user.login} <br/>
                    Email пользователя {user.email} 
                </div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch (`http://127.0.0.1:8000/api/users?id=${params.id}`)
    const user = await response.json()
    
   return {
    props: {user}
   }
}
