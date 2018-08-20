import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

/*
expect(action).toBe({
type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
this test fails, because on comparing 2 object (or array) they will NEVER equal each other even if the object contents equal
*/

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'this is my note update' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'this is my note update'
    }
  })
})

test('should setup addExpense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup addExpense action object with provided values', () => {
  const expenseDataDefault = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseDataDefault,
      id: expect.any(String)
    }
  })
})
//Andrews solution to challenge
/*
test('should setup addExpense action object with provided values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})
*/
