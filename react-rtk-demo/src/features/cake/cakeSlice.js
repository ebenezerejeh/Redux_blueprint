import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    numOfCakes: 10
}


//add a name for the slice
const cakeSlice = createSlice({
    name: 'cake',
    initialState:initialState,
    reducers: {
        ordered: (state)=>{
            state.numOfCakes--
        },
        restocked: (state, action) =>{
            state.numOfCakes += action.payload
        },

    },


})

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions