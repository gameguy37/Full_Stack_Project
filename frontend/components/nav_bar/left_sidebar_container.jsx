import { connect } from 'react-redux';
import LeftSidebar from './left_sidebar';

const mapStateToProps = state => {
    return {
        acceptedFriendIds: state.entities.users[state.session.id].acceptedFriendIds,
        pendingFriendIds: state.entities.users[state.session.id].pendingFriendIds
    };
};

export default connect(mapStateToProps)(LeftSidebar);