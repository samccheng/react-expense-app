import React, { Component } from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpense extends Component{
  onSubmit= (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/dashboard')
  }

  onClick = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id })
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>

        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />

          <button className="button button--edit" onClick={this.onClick}>remove expense</button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense)
