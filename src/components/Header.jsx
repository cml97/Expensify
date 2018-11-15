import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Expensify</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Expense</Link>
        <Link to="/help">Help</Link>
        <button onClick={this.props.logOut}>Log Out</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);
