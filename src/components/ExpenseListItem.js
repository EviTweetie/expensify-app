import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}{' '}
      <button
        onClick={e => {
          console.log(e, id)
          dispatch(removeExpense({ id }))
        }}
      >
        Remove
      </button>
    </p>
  </div>
)

export default connect()(ExpenseListItem)
