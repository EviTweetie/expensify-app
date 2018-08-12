import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setStartDate, setEndDate, setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(
  addExpense({ description: 'Water Bill', amount: 15000, createdAt: 200 })
)
store.dispatch(
  addExpense({ description: 'Gas Bill', amount: 12500, createdAt: 500 })
)

store.dispatch(setStartDate(125))
store.dispatch(setEndDate(1250))
store.dispatch(setTextFilter('water'))

setTimeout(() => {
  store.dispatch(
    addExpense({ description: 'Restaurant Bill', amount: 1000, createdAt: 400 })
  )
}, 2000)

setTimeout(() => {
  store.dispatch(setTextFilter('ill'))
}, 5000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

// console.log('STORE', store)
// console.log('STATE', state)

ReactDOM.render(jsx, document.getElementById('app'))
