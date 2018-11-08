import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
 
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

export default Header;
