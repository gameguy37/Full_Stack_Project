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
    }

    render() {

        debugger


        return (
            <>
                <a href="#" id="rs-friend-balances-btn"><i className="icon-align-justify"></i></a>
                <a href="#" onClick={() => this.props.deleteFriend(this.props.friendId)} id="rs-friend-settings-btn"><i className="icon-cog icon-large"></i></a>
                <h3 id="rs-friend-text">YOUR BALANCE</h3>
            </>
        );

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RightSidebarFriend));