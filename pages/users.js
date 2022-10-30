import Link from "next/link";
import { useState } from "react";
import MainContainer from "../components/MainContainer";


const Users = ({users}) => {
   
    return (
        <MainContainer keywords={'my NEXT.js project'} title={'Пользователи'}>
        
            

            <div>
                  <h1>Users list</h1>   
                  <ul>
                    {users.map(user=>
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                    {user.name}
                            </Link>
                        </li>
                    )}

                  </ul>
            </div>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps() {
    const response = await fetch ('http://127.0.0.1:8000/api/users')
    const users = await response.json()
    
   return {
    props: {users}
   }
}

