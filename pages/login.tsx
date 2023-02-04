import React from "react"
import MainContainer from "../components/MainContainer"

function loginUser() {
    
    // let button:HTMLButtonElement = document.querySelector('.send-userdata-button')
    let form:HTMLFormElement = document.querySelector('#login__form')
    let formData = new FormData(form)
    console.log(JSON.stringify(formData))
}

const Login = () => {
    return(
        <MainContainer keys={'Login'} title={'Логин'} >
            <>
            <form id={'login__form'}>
                <label>
                    <p>Имя</p>
                    <input type="text" name="name" />
                </label> 
                <label>
                    <p>Фамилия</p>
                    <input type="text" name="surname"/>
                </label>
                <label>
                    <p>Логин</p>
                    <input type="text" name="login" />
                </label>
                <label>
                    <p>емейл</p>
                    <input type="email" name="email" />
                </label>
                <label>
                    <p>пароль</p>
                    <input type="password" name="password" />
                </label>
            </form>
            <button className="send-userdata-button" onClick={loginUser}>Зарегистрироваться</button>
            </>

        </MainContainer>
        
    )
}
export default Login;