import React from 'react'
import { connect } from 'react-redux'

const ExpenseList = props => (
  <div>
    <h2>Expense List</h2>
    <p>{props.expenses.length}</p>
  </div>
)

const ConnectedExpenseList = connect(state => {
  return {
    expenses: state.expenses
  }
})(ExpenseList)

export default ConnectedExpenseList
