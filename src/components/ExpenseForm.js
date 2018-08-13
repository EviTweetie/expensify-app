import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// const date = new Date()
// console.log(date)

// const now = moment()
// console.log(now.format('DD.MM.YYYY'))
// console.log(now)

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    note: '',
    createdAt: moment(),
    calendarFocused: false
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
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onDateChange = createdAt => {
    this.setState(() => ({ createdAt }))
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  render() {
    return (
      <div>
        <h1>Expense Form</h1>
        <form>
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
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
