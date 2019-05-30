import { connect } from 'react-redux';
import { addFriend } from '../../actions/dashboard_actions';
import NewFriendForm from './new_friend_form';

const mapDispatchToProps = dispatch => {
    return {
        addFriend: (user) => dispatch(addFriend(user))
    };
};

export default connect(null, mapDispatchToProps)(NewFriendForm);