import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import DashboardItem from '../dashboard/dashboard_item';
import { fetchBills, fetchBill, newBill, editBill, deleteBill } from '../../actions/bills_actions';

const mapStateToProps = state => {
    debugger
    return {

    };
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: () => dispatch(openModal()),
        fetchBills: () => dispatch(fetchBills()),
        fetchBill: (id) => dispatch(fetchBill(id)),
        newBill: (bill) => dispatch(newBill(bill)),
        editBill: (bill) => dispatch(editBill(bill)),
        deleteBill: (id) => dispatch(deleteBill(id)),
    };
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ui: { modal: null },
        };

    }

    render() {

        // const friendsWhoOwe = this.props.users.map(user => {
            // if ((!allFriendIds.includes(user.id)) && (user.id !== this.props.currentUserId)) {
            //     return (
            //         <AddFriendItem key={user.id} friend={user} />
            //     );
            // }
        // });

        // const friendsYouOwe = this.props.users.map(user => {
            // if ((!allFriendIds.includes(user.id)) && (user.id !== this.props.currentUserId)) {
            //     return (
            //         <AddFriendItem key={user.id} friend={user} />
            //     );
            // }
        // });

        // let users;
        // if (allFriendIds.length === (this.props.users.length - 1)) {
        //     users = "You are friends with everyone!";
        // } else {
        //     users = "Users";
        // }

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
                            <span>AMOUNT</span>
                        </div>
                        <div className="reactive-balances">
                            you owe
                            <span>AMOUNT</span>
                        </div>
                        <div className="reactive-balances">
                            you are owed
                            <span>AMOUNT</span>
                        </div>
                    </div>
                    <div id="friend-balances">
                        <div id="you-owe">
                            YOU OWE
                            <DashboardItem />
                        </div>
                        <div id="you-are-owed">
                            YOU ARE OWED
                            <DashboardItem />
                        </div>
                    </div>
                </div>
            </>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);