import React from 'react'
import { connect } from 'react-redux'

const ExpenseList = props => (
  <div>
    <h2>Expense List</h2>
    <h5>Text Filter: {props.filters.text}</h5>
    <p>Number of Expenses: {props.expenses.length}</p>
  </div>
)

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseList)
