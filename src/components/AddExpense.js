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
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">add expense</h1>
          </div>
        </div>

        <div className="content-container">
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  addStartExpense: (expense) => dispatch(addStartExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpense)
