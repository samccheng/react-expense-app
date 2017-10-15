import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addStartExpense } from '../actions/expenses'

export class AddExpense extends Component {
  onSubmit = (expense) => {
    this.props.addStartExpense(expense)
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div>
        <h1>add expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  addStartExpense: (expense) => dispatch(addStartExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpense)
