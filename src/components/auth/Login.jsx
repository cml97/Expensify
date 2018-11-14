import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    updateData = (key, value) => {
        let { form } = this.state;
        form[key] = value;
    
        this.setState({
          form
        })
      }
    render() {
        return (
            <form onSubmit={(form) => this.onSubmit(form)}>
                <input name="username" placeholder="Username" required onChange={(e) => this.updateData('username', e.target.value)}/>
                <input name="password" placeholder="Password" required onChange={(e) => this.updateData('password', e.target.value)}/>
                <button onClick={() => this.props.startLogin()}>Login</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}
export default connect(undefined, mapDispatchToProps)(Login);