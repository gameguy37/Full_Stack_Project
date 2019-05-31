import { connect } from 'react-redux';
import LeftSidebar from './left_sidebar';
import { openModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/users_actions';

const mapStateToProps = state => {
    return {
        acceptedFriendIds: state.entities.users[state.session.id].acceptedFriendIds,
        pendingFriendIds: state.entities.users[state.session.id].pendingFriendIds,
        users: Object.values(state.entities.users),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        fetchUsers: () => dispatch(fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);