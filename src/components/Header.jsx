import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/dashboard" className="header-link">
          <h1>Expensify</h1>
        </NavLink>
        
        <Link to="/help">Help</Link>
        <button className="button-text" onClick={this.props.logOut}>Log Out</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);
