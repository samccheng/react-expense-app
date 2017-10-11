import React, { Component } from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
      </div>

    )
  }
}
