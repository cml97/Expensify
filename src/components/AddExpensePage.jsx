import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense,  } from '../actions/expenses';

class AddExpensePage extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit = (form) => {
    this.props.addExpense(form);
  }
  render() {
    return (
      <div>
        <ExpenseForm onSubmit={(form) => {this.onSubmit(form); this.props.history.push("/")}}/>
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
