import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';

const mapStateToProps = state => {
    debugger
    return {
        user: state.entities.users[state.session.id],
        userId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);