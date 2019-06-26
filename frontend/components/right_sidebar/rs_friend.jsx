import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteFriend } from '../../actions/friendship_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        friendId: ownProps.match.params.friendId,
        users: state.entities.users,
        payments: state.entities.payments,
        bills: state.entities.bills,
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteFriend: (id) => dispatch(deleteFriend(id))
    }
}



class RightSidebarFriend extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        if (confirm("You are about to delete this friend. You will no longer be able to view the currently existing shared expenses between yourself and this person. Are you sure?")) {
            this.props.deleteFriend(this.props.friendId);
            this.props.history.push('/dashboard');
        } else {
            return false;
        }
    }

    render() {
        return (
            <>
                {/* <a href="#" id="rs-friend-balances-btn"><i className="icon-align-justify"></i></a> */}
                <button onClick={this.handleDelete} id="delete-friend-btn">Delete Friend</button>
                {/* <a href="#" onClick={() => this.props.deleteFriend(this.props.friendId)} id="rs-friend-settings-btn"><i className="icon-cog icon-large"></i></a> */}
                <h3 id="rs-friend-text">YOUR BALANCE</h3>
            </>
        );

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RightSidebarFriend));