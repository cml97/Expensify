import React from 'react';
import { addExpense, removeExpense } from '../actions/expenses.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExpenseListItem from './ExpenseListItem';

class ExpenseDashboardPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {

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
