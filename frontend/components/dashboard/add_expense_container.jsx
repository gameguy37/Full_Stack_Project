import { connect } from 'react-redux';
import AddExpense from './add_expense';
import { newBill } from '../../actions/bills_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users),
        acceptedFriendIds: state.entities.users[state.session.id].acceptedFriendIds,
        pendingFriendIds: state.entities.users[state.session.id].pendingFriendIds,
        currentUserId: state.session.id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        newBill: payload => dispatch(newBill(payload)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);