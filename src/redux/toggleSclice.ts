import { createSlice } from "@reduxjs/toolkit"


interface ToggleState{
    mode: boolean
}

const initialState:ToggleState={
    mode: false
}
const ToggleSlice=createSlice({
    name: "toggle",
    initialState,
    reducers:{
        ToggleDarkMode(state){
            state.mode=!state.mode
        }
    }
})

export const {
    ToggleDarkMode
}=ToggleSlice.actions


export default ToggleSlice.reducer
