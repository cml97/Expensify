import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense } from '../actions/expenses';

class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (form) => {
    this.props.dispatch(startEditExpense(this.props.match.params.id, form));
  }
  componentWillReceiveProps(nextProps) {
    
  }
  render() {
    console.log(this.props.expense);
    return (
      <div>
        <ExpenseForm
          onSubmit={(form) => {this.onSubmit(form); this.props.history.push("/")}}
          expense={this.props.expense}
          />
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
