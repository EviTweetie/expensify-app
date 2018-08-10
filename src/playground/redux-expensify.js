import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

/* ACTIONS */

// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
})

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
})
// Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

// Filter Reducer

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: action.sortBy
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase())
      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      } else {
        console.log('no sort by defined')
      }
    })
}

// Store creation

const store = createStore(
  combineReducers({
    //key value pair - state root + reducer function
    expenses: expensesReducer,
    filters: filterReducer
  })
)

// Subscribe to state updates
store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log('STATE: ', state)
  console.log('VISIBLEEXPENSES', visibleExpenses)
})

const exp1 = store.dispatch(
  addExpense({ description: 'Rent', amount: 500, createdAt: 200 })
)
const exp2 = store.dispatch(
  addExpense({ description: 'Coffee', amount: 300, createdAt: 300 })
)
const exp3 = store.dispatch(
  addExpense({ description: 'Tea', amount: 1000, createdAt: 150 })
)

// Remove expense
//store.dispatch(removeExpense({ id: exp3.expense.id }))

// Edit expense
// store.dispatch(
//   editExpense(exp1.expense.id, { amount: 800, note: 'here is my note' })
// )

// Set Filters
// store.dispatch(setTextFilter('re'))
//store.dispatch(setTextFilter())

store.dispatch(setStartDate(125))
//store.dispatch(setStartDate())
store.dispatch(setEndDate(1250))

store.dispatch(sortByAmount())
store.dispatch(sortByDate())

/*
// Demo State
const demoState = {
  expenses: [
    {
      id: '1234',
      description: 'Januar Miete',
      note: 'Januar Miete für aktuelle Wohnung',
      amount: 75000, //left decimal, will be added later represents | € 750,00
      createdAt: 0 //date adding and formatting to come lateron in the course
    }
  ],
  filters: {
    text: 'rent', //enables users to search in description or note
    sortBy: 'amount', //sort by amount or date
    startDate: undefined,
    endDate: undefined
  }
}
console.log(demoState)
*/
