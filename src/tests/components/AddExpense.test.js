import React from 'react'
import { shallow } from 'enzyme'
import { AddExpense } from '../../components/AddExpense'
import expenses from '../fixtures/expenses'

let addStartExpense, history, wrapper

beforeEach(() => {
  addStartExpense = jest.fn()
  history = { push: jest.fn()}
  wrapper = shallow(<AddExpense addStartExpense={addStartExpense} history={history}/>)
})

test('should render AddExpense correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/dashboard')
  expect(addStartExpense).toHaveBeenLastCalledWith(expenses[1])
})
