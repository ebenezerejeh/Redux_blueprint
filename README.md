# Redux_blueprint
An application using redux, redux_toolkit, and react redux
we begin by initializing an npm package and installing redux-toolkit as a dependency

* create the slice in the features folder
* create the store file where you create the store and add the reducers
* in the index.js you use the getState(), subscribe(), store.dispatch()


-create a feature slice using the createslice function which generates the actions and reducers
-perform direct mutations on the state because immer is used under the hood
-create store using configure store function and attach the reducer

-dispatch actions no the store using store.dispatch(cakeActions.ordered())

-inspect the state using store.getState()
you can console log this or save it in a variable


this only runs when there is a change
-listen to changes using store.subscribe(()=>{
    console.log(store.getState())
})


