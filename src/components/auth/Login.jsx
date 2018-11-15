import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box-layout">
            <div className="box">
                <h1>Expensify App</h1>
                <p>It' s time to get your expenses under control.</p>
                <button className="button-google" onClick={() => this.props.startLogin()}>Login with Google</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}
export default connect(undefined, mapDispatchToProps)(Login);