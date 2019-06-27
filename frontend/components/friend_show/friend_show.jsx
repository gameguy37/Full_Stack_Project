import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import FriendShowItem from './friend_show_item';
import { fetchBills, newBill } from '../../actions/bills_actions';
import { fetchComments } from '../../actions/comments_actions';
import { fetchPayments, newPayment } from '../../actions/payments_actions';
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
        fetchBills: () => dispatch(fetchBills()),
        fetchComments: () => dispatch(fetchComments()),
        fetchPayments: () => dispatch(fetchPayments()),
        fetchUsers: () => dispatch(fetchUsers()),
        newBill: (bill) => dispatch(newBill(bill)),
        newPayment: (payment) => dispatch(newPayment(payment)),
    };
}

class FriendShow extends React.Component {
    constructor(props) {
        super(props);
        self = this;

        this.state = {
            ui: { modal: null },
        };

        this.handleAddExpense = this.handleAddExpense.bind(this);
    }

    componentDidMount() {
        this.props.fetchBills();
        this.props.fetchComments();
        this.props.fetchPayments();
        this.props.fetchUsers();
    }

    handleAddExpense() {
        let allFriends = this.props.currentUser.acceptedFriendIds.concat(this.props.currentUser.pendingFriendIds);
        if (allFriends.length === 0) {
            alert("You must add at least one friend before expenses can be split.");
        } else {
            this.props.openModal('addExpense');
        }
    }

    render() {

        let runningBalance = 0;
        let friendOwesYou = [];
        let youOweFriend = [];

        Object.values(self.props.bills).forEach(bill => {
            Object.values(self.props.payments).forEach(payment => {
                if ((payment.user_id === self.props.friendId) && (bill.biller_id === self.props.currentUser.id) && (payment.bill_id === bill.id) && (self.props.currentUser.paidBillIds.includes(bill.id))) {
                    friendOwesYou = friendOwesYou.concat(<FriendShowItem key={bill.id} friendId={self.props.friendId} amount={payment.initial_amount} bill={bill} payment={payment} className="x-owes-you" />)
                    runningBalance += (payment.initial_amount - payment.paid_amount);
                }
            })
        })
        
        Object.values(self.props.payments).forEach(payment => {
            Object.values(self.props.bills).forEach(bill => {
                if ((bill.biller_id === self.props.friendId) && (payment.user_id === self.props.currentUser.id) && (payment.bill_id === bill.id) && (self.props.currentUser.paymentIds.includes(payment.id))) {
                    youOweFriend = youOweFriend.concat(<FriendShowItem key={payment.id} friendId={self.props.friendId} amount={payment.initial_amount} bill={bill} payment={payment} className="you-owe-x" />)
                    runningBalance -= (payment.initial_amount - payment.paid_amount);
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

        let runningBalanceClassName;
        let runningBalanceText = `$${Math.abs(runningBalance).toFixed(2)}`;
        let runningBalanceOweText;
        if (runningBalance > 0) {
            runningBalanceClassName = "pos-running-balance"
            runningBalanceOweText = `${friendName} owes you`
        } else if (runningBalance < 0) {
            runningBalanceClassName = "neg-running-balance"
            runningBalanceOweText = `you owe ${friendName}`
        } else {
            runningBalanceClassName = "no-balance";
            runningBalanceText = "You are all settled up";
            runningBalance = null;
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
                            <a id="add-expense-btn" onClick={this.handleAddExpense}>Add an expense</a>
                        </div>
                    </div>
                    <div id="friend-show-date-bar">
                        <span>JUNE 2019</span>
                    </div>
                    <div id="friend-show-transactions">
                        {friendOwesYou}
                        {youOweFriend}
                    </div>
                </div>
                <div className={runningBalanceClassName}>
                    <span id="rb-text">{runningBalanceOweText}</span>
                    <span id="rb-balance">{runningBalanceText}</span>
                </div>

            </>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendShow);