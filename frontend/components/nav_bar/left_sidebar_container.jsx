import { connect } from 'react-redux';
import LeftSidebar from './left_sidebar';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    debugger
    return {
        acceptedFriendIds: state.entities.users[state.session.id].acceptedFriendIds,
        pendingFriendIds: state.entities.users[state.session.id].pendingFriendIds
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);