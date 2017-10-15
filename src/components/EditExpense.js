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
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick}>remove</button>
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
