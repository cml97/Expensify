import React from 'react';
import { Link } from 'react-router-dom';
import { addExpense } from '../actions/expenses.js';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Expensify</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Expense</Link>
        <Link to="/help">Help</Link>
      </div>
    );
  }
}

export default connect()(Header);
