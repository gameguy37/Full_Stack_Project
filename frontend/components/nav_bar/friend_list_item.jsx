import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.userId]
    }
}

const FriendListItem = (props) => {
    if (!props.user) {
        return null;
    }
    return (
        <li className="friend">{props.user.name}</li>
    );
};

export default connect(mapStateToProps)(FriendListItem);