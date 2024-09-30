// you create a store
import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icrecreamSlice'
import userReducer from '../features/User/userSlice'

const logger = createLogger()

// we use the configureStore which takes a reducer
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },

    
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)

})

export default store