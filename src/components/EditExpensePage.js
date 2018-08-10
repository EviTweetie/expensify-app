import React from "react"

const EditExpensePage = props => {
  console.log(props)
  return (
    <div>
      <div>This is from my EditExpense Component</div>
      <p>
        Editing the expense with id of <strong>{props.match.params.id}</strong>
      </p>
    </div>
  )
}

export default EditExpensePage
