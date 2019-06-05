import { connect } from 'react-redux';
import AddExpense from './add_expense';
import { newBill } from '../../actions/bills_actions';
import { newPayment } from '../../actions/payments_actions';


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
        newBill: bill => dispatch(newBill(bill)),
        newPayment: payment => dispatch(newPayment(payment)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);