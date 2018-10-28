import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

class AddExpensePage extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit = (form) => {
    this.props.dispatch(addExpense(form));
  }
  render() {
    return (
      <div>
        <ExpenseForm onSubmit={(form) => {this.onSubmit(form); this.props.history.push("/")}}/>
      </div>
    );
  }
}
export default connect()(AddExpensePage);
