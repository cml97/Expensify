import React from 'react';
import { addExpense, removeExpense, fetchAllExpenses, getExpense } from '../actions/expenses.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExpenseListItem from './ExpenseListItem';

class ExpenseDashboardPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(fetchAllExpenses(this.props.expenses));
    console.log("Expenses is ", this.props.expenses);
  }

  componentWillReceiveProps(nextProps) {
    
  }
  render() {
    return (
      <div>
        {this.props.expenses.map((item, key) => {
          return (
            <ExpenseListItem item={item} key={key}/>
          )
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}
export default connect(mapStateToProps)(ExpenseDashboardPage);
