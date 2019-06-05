import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import DashboardItem from '../dashboard/dashboard_item';
import { fetchBills, fetchBill, newBill, editBill, deleteBill } from '../../actions/bills_actions';
import { fetchPayments, fetchPayment, newPayment, editPayment, deletePayment } from '../../actions/payments_actions';
import { fetchUsers } from '../../actions/users_actions';

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

class Dashboard extends React.Component {
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

        let totalBalanceUserIsOwed = 0;
        let totalBalanceUserOwes = 0;

        let friendsWhoOwe = Object.values(self.props.users).map( user => {
            let userOwesTotal = 0;
            let userIsOwedTotal = 0;

            if (self.props.currentUser.paymentIds.length === 0) { // if the current user doesn't have any payments due to others
                self.props.currentUser.paidBillIds.forEach( billId => { // iterate through the current user's paid bill IDs array
                    Object.values(self.props.payments).forEach( payment => { // iterate through every payment
                        if ((payment.user_id === user.id) && (payment.bill_id === billId)) {
                            userIsOwedTotal += payment.initial_amount - payment.paid_amount;
                        }
                    })
                })
            } else {
                Object.values(self.props.payments).forEach( payment => {
                        self.props.currentUser.paidBillIds.forEach( billId => {
                            if ((payment.user_id === user.id) && (payment.bill_id === billId) && (self.props.currentUser.paidBillIds.includes(billId))) {
                                userIsOwedTotal += payment.initial_amount - payment.paid_amount;
                            }
                            if ((payment.user_id === self.props.currentUser.id) && (payment.bill_id === billId)) {
                                userOwesTotal += payment.initial_amount - payment.paid_amount;
                            }
                        })
                })
            }
            
            if ((userIsOwedTotal - userOwesTotal) > 0) {
                totalBalanceUserIsOwed += userIsOwedTotal;
                totalBalanceUserOwes += userOwesTotal;
                return (
                    <DashboardItem key={user.id} friendId={user.id} amount={userIsOwedTotal.toFixed(2)} className="right-side" />
                );
            }

        })

        let friendsWhoAreOwed = Object.values(self.props.users).map( user => {
            let userOwesTotal = 0;
            let userIsOwedTotal = 0;
            
            if (self.props.currentUser.paidBillIds.length === 0) { // if the current user hasn't paid any bills at all and only owes others
                Object.values(self.props.payments).forEach ( payment => { // iterate through all payments
                    Object.values(self.props.bills).forEach( bill => { //iterate through all bills
                        if ((payment.user_id === self.props.currentUser.id) && (bill.biller_id === user.id)) {
                            userOwesTotal += payment.initial_amount - payment.paid_amount;
                        }
                    })
                })
            } else {
                Object.values(self.props.payments).forEach( payment => {
                    user.paidBillIds.forEach( billId => {
                        if ((payment.user_id === user.id) && (payment.bill_id === billId) && (user.paidBillIds.includes(billId)) ) {
                            userIsOwedTotal += payment.initial_amount - payment.paid_amount;
                        }
                        if ((payment.user_id === self.props.currentUser.id) && (payment.bill_id === billId) && (user.paidBillIds.includes(billId)) ) {
                            userOwesTotal += payment.initial_amount - payment.paid_amount;
                        }
                    })
                })
            }

            if ((userIsOwedTotal - userOwesTotal) < 0) {
                totalBalanceUserIsOwed += userIsOwedTotal;
                totalBalanceUserOwes += userOwesTotal;
                return (
                    <DashboardItem key={user.id} friendId={user.id} amount={userOwesTotal.toFixed(2)} className="left-side"/>
                );
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
                            <a id="add-expense-btn" onClick={() => this.props.openModal('addExpense')} href="#">Add an expense</a>
                        </div>
                    </div>
                    <div id="dashboard-balances-bar">
                        <div className="reactive-balances">
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