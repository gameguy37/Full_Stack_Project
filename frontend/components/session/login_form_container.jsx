import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user))
    };
};

export default connect(null, mapDispatchToProps)(LoginForm);