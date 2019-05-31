import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        friend: ownProps.friend
    }
}

const AddFriendItem = (props) => {
    if (!props.friend) {
        return null;
    }
    return (
        <li>{props.friend.name}</li>
    );
};

export default connect(mapStateToProps)(AddFriendItem);