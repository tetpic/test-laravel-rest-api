import React from "react"
import { useDispatch, useSelector } from "react-redux"
import MainContainer from "../components/MainContainer"
import { changeEmail, changeLogin, changeName, changePassword, changeSurname } from "../redux/signUpSlice"
import { RootState } from "../redux/store"
// import store from "../redux/store"

function loginUser() {
    
    // let button:HTMLButtonElement = document.querySelector('.send-userdata-button')
    let form:HTMLFormElement = document.querySelector('#login__form')
    let formData = new FormData(form)
    console.log(JSON.stringify(formData))
}

const Login = () => {

    const {userName, userSurname, login, email, password} = useSelector((state: RootState) => state.signUp)
    const dispatch = useDispatch()
    

    return(
        <MainContainer keys={'Login'} title={'Логин'} >
            <>
            <p>{userName}</p>
            <p>{userSurname}</p>
            <p>{login}</p>
            <p>{email}</p>
            <p>{password}</p>
            
            <form id={'login__form'}>
                <label>
                    <p>Имя</p>
                    <input type="text" name="name" value={userName} onChange={(e)=>dispatch(changeName(e.target.value))} />
                </label> 
                <label>
                    <p>Фамилия</p>
                    <input type="text" name="surname" value={userSurname} onChange={(e)=>dispatch(changeSurname(e.target.value))}/>
                </label>
                <label>
                    <p>Логин</p>
                    <input type="text" name="login" value={login} onChange={(e)=> dispatch(changeLogin(e.target.value))}/>
                </label>
                <label>
                    <p>емейл</p>
                    <input type="email" name="email" value={email} onChange={(e)=> dispatch(changeEmail(e.target.value))}/>
                </label>
                <label>
                    <p>пароль</p>
                    <input type="password" name="password" value={password} onChange={(e)=> dispatch(changePassword(e.target.value))} />
                </label>
            </form>
            <button className="send-userdata-button" onClick={loginUser}>Зарегистрироваться</button>
            </>

        </MainContainer>
        
    )
}
export default Login;