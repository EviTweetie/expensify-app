import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'

// Store creation

export default () => {
  const store = createStore(
    combineReducers({
      //key value pair - state root + reducer function
      expenses: expensesReducer,
      filters: filterReducer
    })
  )
  return store
}
