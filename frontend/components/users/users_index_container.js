import { connect } from 'react-redux';
import UsersIndex from './users_index';
import { fetchUsers } from '../../actions/users_actions';

const mapStateToProps = state => ({
    users: Object.values(state.entities.users),
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);
