import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

class AddExpensePage extends React.Component {
  
  onSubmit = (form) => {
    this.props.addExpense(form);
  }

  render() {
    return (
      <div className="content-container">
        <div className="info-container">
        <h1>Add Expense</h1>
      </div>
        <ExpenseForm onSubmit={(form) => {this.onSubmit(form); this.props.history.push("/dashboard")}}/>
      </div>
      
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: expense => dispatch(startAddExpense(expense))
  }
}
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
