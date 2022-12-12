import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface authState {
  token: string,
  status: "authenticated" | "not-authenticated" | "checking",
}

const sessionInStorage = localStorage.getItem("authToken")

const initialState: authState = {
  token: sessionInStorage || "",
  status: sessionInStorage === "" ? "not-authenticated" : "authenticated"
}

export const authSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    
    setLogin: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      state.status = "authenticated"
    },  

    setLogOut: ( state ) => {
      state.token = ""
      state.status = "not-authenticated"
    }, 
    
    setChecking: (state) => {
      state.status = "checking"
    }  
    
  },
})


export const { setLogin, setLogOut, setChecking } = authSlice.actions

export default authSlice.reducer