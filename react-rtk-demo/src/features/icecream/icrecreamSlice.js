import {createSlice} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../cake/cakeSlice'

//add initial state for the slice
const initialState = {
    numOfIcecreams: 20
}


//add a name for the slice
const icecreamSlice = createSlice({
    name: 'icecream',
    initialState:initialState,
    reducers: {
        ordered: state => {
            state.numOfIcecreams --
        },
        restocked: (state,action)=>{
            state.numOfIcecreams += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) =>{
            state.numOfIcecreams--
        })
    }
    
})

//export the reducer as the default export and actions as named exports
export default icecreamSlice.reducer

//icecreamActions is a named export, it can be called anything
export const { ordered, restocked } =  icecreamSlice.actions
