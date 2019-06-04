import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../modal/modal';

const mapStateToProps = state => {
    return {

    };
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: () => dispatch(openModal())
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
                        </div>
                        <div className="reactive-balances">
                            you are owed
                        </div>
                    </div>
                </div>
            </>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);