import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            show: false, ///////
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // showForm() {
    //     this.setState({show: true});
    // }

    change(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.handleSubmit}>
                   
                    <input type="text" value={this.state.email} onChange={this.change("email")} placeholder="Email address" />
                    <br/>
                    <input type="password" value={this.state.password} onChange={this.change("password")} placeholder="Password" />
                    <br/>
                    <input className="dropdown-login-btn" type="submit" value="Log in to Splitwise" />
                    <br/>
                    <span className="forgot-password">Forgot your password? <a href="#">Click here</a></span>
                    <br/>
                    <div className="alt-logins">Or log in with <a href="#">Facebook</a>/<a href="#" className="google-btn">Google</a></div>

                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);