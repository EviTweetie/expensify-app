import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpensesDashboardPage = props => (
  <div>
    <ExpenseListFilters />
    <ExpenseList history={props.history} />
  </div>
)

export default ExpensesDashboardPage
