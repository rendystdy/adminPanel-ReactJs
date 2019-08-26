const redux = require('redux');

// create store
const createStore = redux.createStore;

// reducer
const initialState = {
   value : 0,
   age: 22
}
const rootReducer = (state = initialState, action) => {

   switch (action.type) {
      case 'ADD_AGE':
         return {
            ...state,
            age: state.age + 1
         }
      case 'CHANGE_VALUE':
         return {
            ...state,
            value : state.value + action.newValue
         }  
      default:
         return state;
   }
}

// store

const store = createStore(rootReducer);
console.log(store.getState());

//subscribetion
store.subscribe(() => {
   console.log('change store', store.getState());
})
// dispatching action
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 12})
console.log(store.getState());
