import React from 'react'
import ReactDOM from 'react-dom'
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
store.dispatch(setTextFilter('wate'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log('VISIBLEEXPENSES', visibleExpenses)

//console.log(store.getState())

ReactDOM.render(<AppRouter />, document.getElementById('app'))
