import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

class EditExpensePage extends React.Component {

  onSubmit = (form) => {
    this.props.dispatch(startEditExpense(this.props.match.params.id, form));
  }
  removeExpense = () => {
    this.props.dispatch(startRemoveExpense(this.props.expense.id));
    this.props.history.push("/");
  }
  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    console.log(this.props.expense);
    return (
      <div>
        <ExpenseForm
          onSubmit={(form) => {this.onSubmit(form); this.props.history.push("/dashboard")}}
          expense={this.props.expense}
          />
        <button onClick={this.removeExpense}>
          Remove
        </button>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}
export default connect(mapStateToProps)(EditExpensePage);
