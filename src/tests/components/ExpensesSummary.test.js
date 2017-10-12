import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should show expense summary component with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={100}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should show expense summary component with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={5} expensesTotal={100}/>)
  expect(wrapper).toMatchSnapshot()
})
