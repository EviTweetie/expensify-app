import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({
  description,
  amount,
  createdAt,
  id,
  dispatch,
  history
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
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
