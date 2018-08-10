//11.91 Reducers
import { createStore } from 'redux'

//Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

/* Reducers */
// 1. Reducers are PURE functions (means these functions handle only passed arguments and return value, they do not change anything outside of this scope) the return value of a pure function does only depend on the passed arguments. No variables from outside the function scope may be used.
/* example for a NON-PURE function
     a is a global variable outside the function scope
        let a = 10
        const add = (b) => { return a + b } 
  */
// 2. NEVER change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy }

    case 'DECREMENT':
      return { count: state.count - action.decrementBy }
    case 'SET':
      return { count: action.count }
    case 'RESET':
      return { count: 0 }
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount())
store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 10 }))
store.dispatch(setCount({ count: 10000 }))
store.dispatch(resetCount())
