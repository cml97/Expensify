import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit = (form) => {

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
    expense: state.expenses.find((expense) => expense.id == props.match.params.id)
  }
}
export default connect(mapStateToProps)(EditExpensePage);
