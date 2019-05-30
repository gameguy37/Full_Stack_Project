import { connect } from 'react-redux';
import { invite } from '../../actions/dashboard_actions';
import NewFriendForm from './new_friend_form';

const mapDispatchToProps = dispatch => {
    return {
        invite: (user) => dispatch(invite(user))
    };
};

export default connect(null, mapDispatchToProps)(NewFriendForm);