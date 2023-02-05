import {combineReducers, configureStore } from '@reduxjs/toolkit'

// импортируем слайсы без скобок, иначе тс ругается(потому что деструктуризация)
import signUpSlice from './signUpSlice'

// const rootReducer = combineReducers({
//   signUp: signUpSlice,
// })

const store = configureStore({
    reducer: {
      signUp:  signUpSlice,
    //   isAuthorized: authorizedSlice,
     
    },

  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
export default store;
// export type AppStore = ReturnType<typeof store>;
// export type AppState = ReturnType<AppStore["getState"]>;
  export type RootState = ReturnType<typeof store.getState>
//   // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch

  // export const wrapper = createWrapper(makeStore);