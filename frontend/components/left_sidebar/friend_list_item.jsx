import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
        <NavLink to={`/friends/${props.user.id}`} className="friend"><li><i className="fas fa-user" height="18px"></i> {props.user.name}</li></NavLink>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendListItem);