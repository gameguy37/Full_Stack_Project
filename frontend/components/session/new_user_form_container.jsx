import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import NewUserForm from './new_user_form';

const mapStateToProps = state => {
    debugger
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
        signup: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);