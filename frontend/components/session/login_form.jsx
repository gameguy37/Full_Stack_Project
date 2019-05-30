import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            formOpen: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.showForm = this.showForm.bind(this);
    }

    showForm() {
        if (this.state.formOpen) {
            this.setState({formOpen: false});
        } else {
            this.setState({formOpen: true});
        }
    }

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
        let dropdownForm;
        if (this.state.formOpen) {
            dropdownForm = (
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.email} onChange={this.change("email")} placeholder="Email address" />
                    <br />
                    <input type="password" value={this.state.password} onChange={this.change("password")} placeholder="Password" />
                    <br />
                    <input className="dropdown-login-btn" type="submit" value="Log in to Splitwise" />
                    <br />
                    <span className="forgot-password">Forgot your password? <a href="#">Click here</a></span>
                </form>
            );
        } else {
            dropdownForm = null;
        }
        
        return (
            <div>
                <button onClick={this.showForm} className="header-login-btn">Log in</button>
                {dropdownForm}
            </div>
        );
    }
}

export default withRouter(LoginForm);