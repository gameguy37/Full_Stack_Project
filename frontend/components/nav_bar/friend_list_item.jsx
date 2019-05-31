import React from 'react';
import { connect } from 'react-redux';
import { } from '../../util/friendships';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.userId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        destroyFriendship: (id) => dispatch(destroyFriendship(id))
    };
}

const FriendListItem = (props) => {
    if (!props.user) {
        return null;
    }
    return (
        <li className="friend"><i className="fas fa-user fa-xs"></i> {props.user.name}</li>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendListItem);