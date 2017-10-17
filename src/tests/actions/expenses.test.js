import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  addStartExpense,
  addExpense,
  removeExpense,
  editExpense,
  startEditExpense,
  setExpenses,
  setStartExpenses,
  startRemoveExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import db from '../../firebase/firebase'


const uid = '2345'
const createMockStore = configureMockStore([thunk])
const defaultAuthState = { auth: { uid }}


beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  })
  db.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

test('setup remove action object', () => {
  const action = removeExpense({id: '1234'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234'
  })
})

test('should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = expenses[1].id
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return db.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
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

test('should edit expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = expenses[0].id
  const updates = { amount: 1010 }

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return db.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount)
      done()
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
  const store = createMockStore(defaultAuthState)
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

    return db.ref(`users/${uid}/expenses/${action[0].expense.id}`).once('value')
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
  })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState)
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

    return db.ref(`users/${uid}/expenses/${action[0].expense.id}`).once('value')
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefault)
      done()
  })
})

test('should set expenses action object', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch expense data', (done) => {
  const store = createMockStore(defaultAuthState)

  store.dispatch(setStartExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
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
