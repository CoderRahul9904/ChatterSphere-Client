import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSclice"


const store=configureStore({
    reducer:{
        toggle:toggleReducer
    }
})

export default store