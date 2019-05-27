import * as React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {logIn} from "../actions/sessionActions";

interface Props extends React.Props<Login> {
    is_authorized: boolean,
    error: boolean,
    location: any,
    logIn: (username: string, password: string) => void
}

class Login extends React.Component<Props, {}> {

    render() {

        const {location, is_authorized, error } = this.props;

        const { from } = location.state || { from: { pathname: '/' } };

        if (is_authorized) {
            return <Redirect to={from} />;
        }

        return (
            <form id='login_form' onSubmit={this.handleSubmit} className="login_form">
                <label>Login</label>
                <input required type='text' name='username'/>
                <label>Password</label>
                <input required type='password' name='password'/>
                <button type="submit">Sign In</button>
                <div className='login_form_error' hidden={!error}>
                    Invalid login or password
                </div>
            </form>
        );
    }

    handleSubmit = (event: any) => {
        
        event.preventDefault();
        
        let username = event.target.elements.username.value;
        let password = event.target.elements.password.value;

        this.props.logIn(username, password);
    }
}

const mapStateToProps = (state: any) => (
    {
        is_authorized: Boolean(state.is_authorized),
        error: Boolean(state.error)
    }
);

const mapDispatchToProps = (dispatch: any) => (
    {
        logIn: (username: string, password: string) => dispatch(logIn(username, password)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);