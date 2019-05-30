import React from 'react';

class NewFriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            invitee: '',
            message: '',
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
        this.props.invite(this.state);
    }

    render() {
        return (

            <form className="invite-friend-form" onSubmit={this.handleSubmit}>
                <span></span>
                Invite friends
                <span>X</span>
                <input type="text" value={this.state.invitee} onChange={this.change("invitee")} placeholder="Enter names or email addresses" />
                <br />
                <input type="textarea" value={this.state.message} onChange={this.change("message")} placeholder="Include an optional message" />
                <br />
                <a href="#">Preview the message you'll send</a>
                <input className="send-invites-btn" type="submit" value="Send invites and add friends" />
                <br />
                <span className="forgot-password">Forgot your password? <a href="#">Click here</a></span>
            </form>
        );
    }
}

export default NewFriendForm;