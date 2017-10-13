import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addStartExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import db from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

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
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'coffee',
    amount: 300,
    note: '',
    createdAt: 1000
  }

  store.dispatch(addStartExpense(expenseData)).then(() => {
    const action = store.getActions()
    expect(action[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return db.ref(`expenses/${action[0].expense.id}`).once('value')
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
  })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({})
  const expenseDefault = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }

  store.dispatch(addStartExpense({})).then(() => {
    const action = store.getActions()
    expect(action[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefault
      }
    })

    return db.ref(`expenses/${action[0].expense.id}`).once('value')
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefault)
      done()
  })
})



// test('setup add action object with default values', () => {
//   const action = addExpense()
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   })
// })
