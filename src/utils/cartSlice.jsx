import { createSlice ,current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    // There are multiple reducers in a slice
    reducers:{
        //We are writing reducer functions corresponding to each actions
        addItems:(state,action)=>{
            // In older redux they said not to mutate or not to modify the state
            // In older redux we used to create new state,modify that and then return it
            // const newState = [...state]
            // newState.items.push(action.payload)
            // return newState

            // but in new versions of redux we are directly modifying the state 
            // Now we are mutating the state
            // but actually behind the scenes redux is using somewhat similar to the older method
            // This is done with the help of immer
             state.items.push(action.payload)
        },
        removeItem:(state )=>{
            state.items.pop();
        },
        // state=['Pizza']
        // actually this is how state looks like {items:['Pizza']}
        clearCart:(state)=>{
            // console.log(state) ['Pizza]
            console.log(current(state))// if we need to console correctly else we get a proxy object
            // state=[] this is like state is pointing to a new reference
            // console.log(state) [] The actual state has not modified its still ['Pizza']
            state.items.length=0 
            // we should mutate the state or return a new state in RTK like the below step
            // return [] return actulaly looks like {items:[]}
        }
    }
})

// reducer is a combination of small reducers

export const {addItems,removeItem,clearCart} = cartSlice.actions
export default cartSlice.reducer