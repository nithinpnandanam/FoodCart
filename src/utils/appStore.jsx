import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
// this is what we export from cartSlice.jsx " export default cartSlice.reducer " and we name that as cartReducer
const appStore = configureStore({
    // for the there is one big reducer for the app store.Within it we have multiple small reducers
    reducer:{
        cart:cartReducer, 
    }
})
export default appStore