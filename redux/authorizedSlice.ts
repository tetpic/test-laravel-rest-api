import { createSlice } from "@reduxjs/toolkit";

interface userAuthorized {
    authorized: boolean
}

let initialState: userAuthorized = {
    authorized: false
}



export const authorizedSlice = createSlice({
    name: 'isAuthorized',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    
    },
  })
  
  export const {} = authorizedSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
//   export const selectCount = (state: RootState) => state.counter.value
  
//   export default counterSlice.reducer