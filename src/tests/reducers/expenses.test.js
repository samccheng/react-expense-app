import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual([])
})

test('should remove expense from id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expenseReducer(expenses, action)

  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense from id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expenseReducer(expenses, action)

  expect(state).toEqual(expenses)
})

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  }
  const state = expenseReducer(expenses, action)

  expect(state).toEqual([...expenses, action.expense])
})

test('should edit expense', () => {
  const amount = 10000
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  }
  const state = expenseReducer(expenses, action)

  expect(state[1].amount).toBe(amount)
})

test('should not edit expense if id not found', () => {
  const amount = 10000
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  }
  const state = expenseReducer(expenses, action)

  expect(state).toEqual(expenses)
})

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual([expenses[1]])
})
