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
    <button
      onClick={e => {
        e.preventDefault()
        console.log({ id })
        history.push(`/edit/:${id}`)
      }}
    >
      {description}
    </button>
    <h3>
      <Link to="/">{description}</Link>
    </h3>
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
