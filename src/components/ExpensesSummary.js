import React from 'react'
import { connect } from 'react-redux'
import expensesCount from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

const ExpensesSummary = (props) => {
  return (
    <div>
      <p>viewing {(props.expenses.length)} expenses totaling {numeral(props.total/100).format('$0,0.00')}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  expenses: expensesCount(state.expenses, state.filters),
  total: expensesTotal(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpensesSummary)
