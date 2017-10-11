import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'

test('should render a single list item', () => {
  const wrapper= shallow(<ExpenseListItem {...expenses[0]}/>)
  expect(wrapper).toMatchSnapshot()
})
