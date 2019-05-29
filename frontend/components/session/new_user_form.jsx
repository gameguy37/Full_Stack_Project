import React from 'react';
import { withRouter } from 'react-router-dom';

class NewUserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    change(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>INTRODUCE YOURSELF</h4>

                    <label>Hi there! My name is
                        <input type="text" value={this.state.name} onChange={this.change("name")} />
                    </label>

                    <label>Here's my <strong>email address:</strong>
                        <input type="text" value={this.state.email} onChange={this.change("email")} />
                    </label>

                    <label>And here's my <strong>password:</strong>
                        <input type="text" value={this.state.password} onChange={this.change("password")} />
                    </label>

                    <input type="submit" value="Sign me up!" />
                </form>
            </div>
        );
    }
}

export default withRouter(NewUserForm);