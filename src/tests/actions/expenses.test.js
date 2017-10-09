import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

const expenses = [
  {
    id: '1',
    description: 'util',
    note: '',
    createdAt: 0,
    amount: 0
  },
  {
    id: '2',
    description: 'rent',
    note: '',
    createdAt: 0,
    amount: 0
  },
  {
    id: '3',
    description: 'food',
    note: '',
    createdAt: 0,
    amount: 0
  }
]


test('setup remove action object', () => {
  const action = removeExpense({id: '1234'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234'
  })
})

test('setup edit action object', () => {
  const action = editExpense('1234', { note: 'new note'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234',
    updates: {
      note: 'new note'
    }
  })
})

test('setup add action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    amount: 10000,
    createdAt: 1000,
    note: 'note'
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

test('setup add action object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})
