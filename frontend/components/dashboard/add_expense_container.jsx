import { connect } from 'react-redux';
import AddExpense from './add_expense';
// import { addExpense } from '../../actions/bills_actions';

const mapStateToProps = (state) => {
    return {
        // bills: Object.values(state.entities.bills),

        // acceptedFriendIds: state.entities.users[state.session.id].acceptedFriendIds,
        // pendingFriendIds: state.entities.users[state.session.id].pendingFriendIds,
        // currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addExpense: bill => dispatch(addExpense(bill)),
        // fetchUsers: () => dispatch(fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);