import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import DashboardItem from '../dashboard/dashboard_item';
import { fetchBills, newBill } from '../../actions/bills_actions';
import { fetchPayments, newPayment } from '../../actions/payments_actions';
import { fetchUsers } from '../../actions/users_actions';
import { fetchComments } from '../../actions/comments_actions';

const mapStateToProps = state => {
    return {
        users: state.entities.users,
        bills: state.entities.bills,
        payments: state.entities.payments,
        currentUser: state.entities.users[state.session.id]
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

class Dashboard extends React.Component {
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

        let totalBalanceUserIsOwed = 0;
        let totalBalanceUserOwes = 0;

        let friendsWhoAreOwed = [];
        let friendsWhoOwe = [];

        Object.values(self.props.users).map( user => {
            let userOwesTotal = 0;
            let userIsOwedTotal = 0;

            if (self.props.currentUser.paymentIds.length === 0) {
                self.props.currentUser.paidBillIds.forEach( billId => {
                    Object.values(self.props.payments).forEach( payment => {
                        if ((payment.user_id === user.id) && (payment.bill_id === billId) && (self.props.currentUser.acceptedFriendIds.includes(user.id) || self.props.currentUser.pendingFriendIds.includes(user.id))) {
                            userIsOwedTotal += payment.initial_amount - payment.paid_amount;
                        }
                    })
                })
            } else if (self.props.currentUser.paidBillIds.length === 0) {
                Object.values(self.props.payments).forEach(payment => {
                    Object.values(self.props.bills).forEach(bill => {
                        if ((payment.user_id === self.props.currentUser.id) && (bill.biller_id === user.id) && (self.props.currentUser.acceptedFriendIds.includes(user.id) || self.props.currentUser.pendingFriendIds.includes(user.id))) {
                            userOwesTotal += payment.initial_amount - payment.paid_amount;
                        }
                    })
                })
            } else {
                Object.values(self.props.payments).forEach( payment => {
                    self.props.currentUser.paidBillIds.forEach( billId => {
                        if ((payment.user_id === user.id) && (payment.bill_id === billId) && (self.props.currentUser.paidBillIds.includes(billId)) && (self.props.currentUser.acceptedFriendIds.includes(user.id) || self.props.currentUser.pendingFriendIds.includes(user.id))) {
                            userIsOwedTotal += payment.initial_amount - payment.paid_amount;
                        }
                    })
                    user.paidBillIds.forEach( billId => {
                        if ((payment.user_id === self.props.currentUser.id) && (payment.bill_id === billId) && (user.paidBillIds.includes(billId)) && (self.props.currentUser.acceptedFriendIds.includes(user.id) || self.props.currentUser.pendingFriendIds.includes(user.id))) {
                            userOwesTotal += payment.initial_amount - payment.paid_amount;
                        }
                    })
                })
            }

            if (userIsOwedTotal - userOwesTotal < 0) {
                totalBalanceUserOwes += (userOwesTotal - userIsOwedTotal);
            }

            if (userIsOwedTotal - userOwesTotal > 0) {
                totalBalanceUserIsOwed += (userIsOwedTotal - userOwesTotal);
            }
            

            if (((userIsOwedTotal - userOwesTotal) < 0) && (self.props.currentUser.acceptedFriendIds.includes(user.id) || self.props.currentUser.pendingFriendIds.includes(user.id))) {
                friendsWhoAreOwed = friendsWhoAreOwed.concat(<DashboardItem key={user.id} friendId={user.id} amount={Math.abs(userIsOwedTotal - userOwesTotal).toFixed(2)} className="left-side" />);
            }

            if (((userIsOwedTotal - userOwesTotal) > 0) && (self.props.currentUser.acceptedFriendIds.includes(user.id) || self.props.currentUser.pendingFriendIds.includes(user.id))) {
                friendsWhoOwe = friendsWhoOwe.concat(<DashboardItem key={user.id} friendId={user.id} amount={Math.abs(userIsOwedTotal - userOwesTotal).toFixed(2)} className="right-side" />);
            }

        })
        let totalBalance;
        let negativeBalance;

        if (totalBalanceUserIsOwed - totalBalanceUserOwes < 0) {
            totalBalance = "negative";
            negativeBalance = "- ";
        } else {
            totalBalance = "positive";
            negativeBalance = "";
        }
        
        return (
            <>
                <div id="dashboard-box">
                    <div id="dashboard-topbar">
                        <h1>Dashboard</h1>
                        <div id="dashboard-topbar-btns">
                            <span id="add-expense-btn" onClick={this.handleAddExpense} >Add an expense</span>
                        </div>
                    </div>
                    <div id="dashboard-balances-bar">
                        <div className="reactive-balances">
                            total balance
                            <span id={totalBalance}>{negativeBalance}${Math.abs((totalBalanceUserIsOwed - totalBalanceUserOwes)).toFixed(2)}</span>
                        </div>
                        <div className="reactive-balances-with-border">
                            you owe
                            <span id="total-you-owe">${totalBalanceUserOwes.toFixed(2)}</span>
                        </div>
                        <div className="reactive-balances-with-border">
                            you are owed
                            <span id="total-owed">${totalBalanceUserIsOwed.toFixed(2)}</span>
                        </div>
                    </div>
                    <div id="friend-balances">
                        <div id="you-owe">
                            YOU OWE
                            <ul>
                                {friendsWhoAreOwed}
                            </ul>
                        </div>
                        <div id="you-are-owed">
                            YOU ARE OWED
                            <ul>
                                {friendsWhoOwe}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);