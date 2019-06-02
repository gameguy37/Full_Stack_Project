import React from 'react';
import { withRouter } from 'react-router-dom';

class NewUserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            showFields: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.showFields = this.showFields.bind(this);
    }

    // showFields() {
    //     if (this.state.name === '') {
    //         this.setState({ showFields: false });
    //     } else {
    //         this.setState({ showFields: true });
    //     }
    // }

    change(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    displayHiddenFields() {
        const hidden = document.getElementById("signup-hidden");
        hidden.classList.add('open');
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    displayErrors() {
        if (this.props.errors.length > 0) {
            const errEle = document.getElementById("session-errors");
            errEle.classList.add('open');
        }

        return (
            <ul>
                {this.props.errors.map( (err, idx) => (
                    <li className="error" key={idx}>{err}</li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <>
            <div id="session-errors">{this.displayErrors()}</div>
            <div id="signup-box">
                <section id="signup-image"><img src={window.logo} height="200px" /></section>
                <form id="signup-form" onSubmit={this.handleSubmit}>
                    <span id="intro">Introduce yourself</span>
                    <br/>
                    <label id="signup-name-label">Hi there! My name is</label>
                    <br/>
                    <input id="signup-name-input" type="text" value={this.state.name} onInput={this.displayHiddenFields} onChange={this.change("name")} />
                    
                    <div id="signup-hidden">
                        <div id="signup-email">
                            Here's my <strong className="strong">email address:</strong>
                            <br/>
                            <input id="signup-email-input" type="text" value={this.state.email} onChange={this.change("email")} />
                        </div>
                        
                        <div id="signup-password">
                            And here's my <strong className="strong">password:</strong>
                            <br/>
                            <input id="signup-password-input" type="password" value={this.state.password} onChange={this.change("password")} />
                        </div>
                    </div>

                    <input id="signup-btn" type="submit" value="Sign me up!" />
                    
                    <div className="tos-link">
                        <a href="#">By signing up, you accept the goDutch Terms of Service.</a>
                    </div>
                </form>
            </div>
            </>
        );
    }
}

export default withRouter(NewUserForm);