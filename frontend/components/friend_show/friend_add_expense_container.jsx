import { connect } from 'react-redux';
import FriendAddExpense from './friend_add_expense';
import { newBill } from '../../actions/bills_actions';


const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users),
        friendId: ownProps.match.params.friendId,
        currentUserId: state.session.id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        newBill: payload => dispatch(newBill(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendAddExpense);