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
        this.props.addFriend(this.state.invitee);
    }

    render() {
        return (
            <div id="invite-friend-modal">
                <form className="invite-friend-form" onSubmit={this.handleSubmit}>
                    <span></span>
                    Invite friends
                    <span>X</span>
                    <br/>
                    <input type="text" value={this.state.invitee} onChange={this.change("invitee")} placeholder="Enter email address" />
                    <br />
                    <input type="textarea" value={this.state.message} onChange={this.change("message")} placeholder="Include an optional message" />
                    <br />
                    <a href="#">Preview the message you'll send</a>
                    <input className="send-invites-btn" type="submit" value="Send invites and add friends" />
                </form>
            </div>
        );
    }
}

export default NewFriendForm;