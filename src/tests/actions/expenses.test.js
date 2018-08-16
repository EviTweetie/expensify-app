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
