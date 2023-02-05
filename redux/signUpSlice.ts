import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper";


interface signUpState {
    userName: string,
    userSurname: string,
    login: string,
    email: string,
    password: string
}

let initialState: signUpState = {
    userName: 'test',
    userSurname: 'lol',
    login: 'kek',
    email: '',
    password: '',
    
}

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    // в редьюсеры после payload надо вставить значение которое хотим получить
    reducers: {
        // надо закрывать тело вызова в фигурные скобки, иначе выдает ошибку
        changeName: (state, action) => {state.userName = action.payload},
        changeSurname: (state, action) => {state.userSurname = action.payload},
        changeLogin: (state, action) => {state.login = action.payload},
        changeEmail: (state, action) => {state.email = action.payload},
        changePassword: (state, action) => {state.password = action.payload},
    },
    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //       return {
    //         ...state,
    //         ...action.payload,
    //       };
    //     },
    // }
})

export const {changeName, changeSurname, changeLogin, changeEmail, changePassword} = signUpSlice.actions
export default signUpSlice.reducer;
