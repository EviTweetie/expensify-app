import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }

  onDescriptionChange = e => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }
  onNoteChange = e => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }
  onAmountChange = e => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
    //if: tweak to unable deleting the date value as a better user experience
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onSubmit = e => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide a description and amount.'
      }))
    } else {
      this.setState(() => ({
        error: ''
      }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render() {
    return (
      <div>
        <h1>Expense Form</h1>
        <span style={{ color: 'red' }}>
          {!!this.state.error ? this.state.error : null}
        </span>
        {this.state.error && (
          <p>
            Andrew's solution (logical AND):
            <span style={{ color: 'orange' }}>{this.state.error}</span>
          </p>
        )}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />

          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => {
              false
            }}
          />
          <textarea
            name="Note"
            id="NOTE"
            cols="30"
            rows="3"
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>
            {this.props.expense ? 'Update Expense' : 'Add Expense'}
          </button>
        </form>
      </div>
    )
  }
}
