import React from 'react'
import { shallow } from 'enzyme'
import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expense', () => {
  const total = getExpensesTotal([])
  expect(total).toBe(0)
})

test('should add correctly with 1 expense', () => {
  const total = getExpensesTotal([expenses[0]])
  expect(total).toBe(300)
})

test('should add correctly with multiple expense', () => {
  const total = getExpensesTotal(expenses)
  expect(total).toBe(4000)
})
