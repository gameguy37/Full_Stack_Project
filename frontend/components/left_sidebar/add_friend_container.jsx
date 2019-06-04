import { connect } from 'react-redux';
import AddFriend from './add_friend';
import { fetchUsers } from '../../actions/users_actions';
import { addFriend } from '../../actions/dashboard_actions';

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users),
        acceptedFriendIds: state.entities.users[state.session.id].acceptedFriendIds,
        pendingFriendIds: state.entities.users[state.session.id].pendingFriendIds,
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addFriend: friendee => dispatch(addFriend(friendee)),
        fetchUsers: () => dispatch(fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);