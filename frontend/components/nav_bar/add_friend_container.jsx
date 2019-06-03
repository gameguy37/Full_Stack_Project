import { connect } from 'react-redux';
import AddFriend from './add_friend';
import { fetchUsers } from '../../actions/users_actions';
import { addFriend } from '../../actions/dashboard_actions';

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addFriend: friendee => dispatch(addFriend(friendee)),
        fetchUsers: () => dispatch(fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);