import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../../actions/friendship_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        friend: ownProps.friend
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFriend: user => dispatch(addFriend(user)),
        closeModal: () => dispatch(closeModal())
    }
}

const AddFriendItem = (props) => {
    if (!props.friend) {
        return null;
    }
    return (
        <li className="add-friend-flex">{props.friend.name}<form onSubmit={() => props.closeModal()}><input onClick={() => props.addFriend(props.friend)} className="add-friend-btn" type="submit" value="Add Friend!"></input></form></li>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendItem);