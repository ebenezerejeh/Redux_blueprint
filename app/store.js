// you create a store
const configureStore = require('@reduxjs/toolkit').configureStore
const reduxlogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icrecreamSlice')

const logger = reduxlogger.createLogger()

// we use the configureStore which takes a reducer
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },

    
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)

})

module.exports = store