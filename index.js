const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreameActions = require('./features/icecream/icrecreamSlice').icecreamActions

console.log('initial state', store.getState())
const unsubscribe = store.subscribe(()=>{})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(icecreameActions.ordered())
store.dispatch(icecreameActions.restocked(3))
unsubscribe()