import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import FriendShowItem from './friend_show_item';
import { fetchBills, fetchBill, newBill, editBill, deleteBill } from '../../actions/bills_actions';
import { fetchPayments, fetchPayment, newPayment, editPayment, deletePayment } from '../../actions/payments_actions';
import { fetchUsers } from '../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.entities.users,
        bills: state.entities.bills,
        payments: state.entities.payments,
        currentUser: state.entities.users[state.session.id],
        friendId: parseInt(ownProps.match.params.friendId),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchBills: () => dispatch(fetchBills()),
        // fetchBill: (id) => dispatch(fetchBill(id)),
        newBill: (bill) => dispatch(newBill(bill)),
        // editBill: (bill) => dispatch(editBill(bill)),
        // deleteBill: (id) => dispatch(deleteBill(id)),
        fetchPayments: () => dispatch(fetchPayments()),
        // fetchPayment: (id) => dispatch(fetchPayment(id)),
        newPayment: (payment) => dispatch(newPayment(payment)),
        // editPayment: (payment) => dispatch(editPayment(payment)),
        // deletePayment: (id) => dispatch(deletePayment(id)),
    };
}

class FriendShow extends React.Component {
    constructor(props) {
        super(props);
        self = this;

        this.state = {
            ui: { modal: null },
        };

    }

    componentDidMount() {
        this.props.fetchBills();
        this.props.fetchPayments();
        this.props.fetchUsers();
    }

    render() {
        let friendOwesYou = []
        let youOweFriend = []
        
        self.props.currentUser.paidBillIds.map(billId => {
            Object.values(self.props.payments).forEach(payment => {
                if ((payment.user_id === self.props.friendId) && (payment.bill_id === billId)) {
                    friendOwesYou = friendOwesYou.concat(<FriendShowItem key={billId} friendId={self.props.friendId} amount={(payment.initial_amount - payment.paid_amount).toFixed(2)} className="x-owes-you" />)
                }
            })
        })

        self.props.currentUser.paymentIds.map(paymentId => {
            Object.values(self.props.bills).forEach(bill => {
                if ((bill.biller_id === self.props.friendId) && (self.props.currentUser.paymentIds.includes(paymentId))) {
                    let payment = self.props.payments[paymentId];
                    youOweFriend = youOweFriend.concat(<FriendShowItem key={paymentId} friendId={self.props.friendId} amount={(payment.initial_amount - payment.paid_amount).toFixed(2)} className="you-owe-x" />)
                }
            })
        })

        let friendName;
        let pending;
        if (Object.values(self.props.users).length > 1) {
            friendName = self.props.users[self.props.friendId].name;
        } else {
            friendName = null;
        }

        if ((Object.values(self.props.users).length > 1) && (self.props.users[self.props.currentUser.id].pendingFriendIds.includes(self.props.friendId))) {
            pending = "invite pending";
        } else {
            pending = null;
        }

        return (
            
            <>
                <div id="dashboard-box">
                    <div id="dashboard-topbar">
                        <div id="username-friendship-flex">
                            <img src={window.profilePic}></img>
                            <h1>{friendName}</h1>
                            <span>{pending}</span>
                        </div>
                        <div id="dashboard-topbar-btns">
                            <a id="add-expense-btn" onClick={() => this.props.openModal('addExpense')} href="#">Add an expense</a>
                        </div>
                    </div>
                    <div id="dashboard-balances-bar">
                        {/* <div className="reactive-balances">
                            total balance
                            <span id={totalBalance}>{negativeBalance}${Math.abs((totalBalanceUserIsOwed - totalBalanceUserOwes)).toFixed(2)}</span>
                        </div>
                        <div className="reactive-balances">
                            you owe
                            <span id="total-you-owe">${totalBalanceUserOwes.toFixed(2)}</span>
                        </div>
                        <div className="reactive-balances">
                            you are owed
                            <span id="total-owed">${totalBalanceUserIsOwed.toFixed(2)}</span>
                        </div> */}
                    </div>
                    <div id="friend-show-transactions">
                        {friendOwesYou}
                        {youOweFriend}
                    </div>
                </div>
            </>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendShow);