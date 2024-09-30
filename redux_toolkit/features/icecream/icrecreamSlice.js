const createSlice = require('@reduxjs/toolkit').createSlice

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
    
})

//export the reducer as the default export and actions as named exports
module.exports = icecreamSlice.reducer

//icecreamActions is a named export, it can be called anything
module.exports.icecreamActions =  icecreamSlice.actions
