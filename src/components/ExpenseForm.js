import React from 'react'

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: ''
  }
  onDescriptionChange = e => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }
  onNoteChange = e => {
    const note = e.target.value
    this.setState(() => ({ note }))
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

          <input type="number" placeholder="Amount" />
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
