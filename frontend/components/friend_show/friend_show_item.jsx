import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users_actions';
import { deleteBill } from '../../actions/bills_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        friendId: ownProps.friendId,
        friend: state.entities.users[ownProps.friendId],
        amount: ownProps.amount,
        className: ownProps.className,
        bill: ownProps.bill,
        payment: ownProps.payment,
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteBill: bill => dispatch(deleteBill(bill)),
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

const FriendShowItem = (props) => {

    if (Object.values(props.users).length < 2) {
        return null;
    }

    let whoLentWho;
    if (props.friend && props.className === "x-owes-you") {
        whoLentWho = props.friend.name + " owes you"
    } else if (props.friend && props.className && props.className === "you-owe-x") {
        whoLentWho = "you owe " + props.friend.name
    } else {
        whoLentWho = null;
    }

    let owedAmount;
    let reactiveId;
    let description;
    let friendName;
    let billAmount;

    if (props.bill && props.payment && props.friend && (props.payment.bill_id === props.bill.id) && (props.payment.user_id === props.friendId) && (props.bill.biller_id === props.currentUser.id)) {
        owedAmount = (parseFloat(props.payment.initial_amount - props.payment.paid_amount)).toFixed(2);
        reactiveId = "green";
        description = props.bill.description;
        friendName = "you"
        billAmount = (parseFloat(props.bill.total_amount)).toFixed(2);
    }
    
    if (props.bill && props.payment && props.friend && (props.payment.bill_id === props.bill.id ) && (props.bill.biller_id === props.friendId) && (props.payment.user_id === props.currentUser.id)) {
        owedAmount = (parseFloat(props.payment.initial_amount - props.payment.paid_amount)).toFixed(2);
        reactiveId = "orange";
        description = props.bill.description;
        friendName = props.friend.name;
        billAmount = (parseFloat(props.bill.total_amount)).toFixed(2);
    }
    return (
        
        <li className={props.className}>
            <div id="friend-show-item">
                <div id="friend-show-left">
                    <div id="fsl-date">
                        <span id="fsl-date-month">JUN</span>
                        <span id="fsl-date-num">05</span>
                    </div>
                    <img src={window.uncategorized} />
                    <span id="description">{description}</span>
                </div>
                <div id="friend-show-right0">
                    <div id="friend-show-right1">
                        <div id="this-person-paid">
                            <span>{friendName} paid</span>
                            <span id="tpp-amt">${billAmount}</span>
                        </div>
                    </div>
                    <div id="friend-show-right2">
                        <div id="amount-owed">
                            <span>{whoLentWho}</span>
                            <span id={reactiveId}>${owedAmount}</span>
                        </div>
                    </div>
                </div>
                <div id="friend-show-delete">
                    <button onClick={() => props.deleteBill(props.bill.id)}>Delete</button>
                </div>
            </div>
            <div id="friend-show-bill" className="show-bill">
                <div id="friend-show-bill-topbar">
                    <img id="topbar-image" src={window.uncategorized} />
                    <div id="topbar-info">
                        <span id="topbar-span1">
                            {props.bill.description}
                        </span>
                        <span id="topbar-span2">
                            ${parseFloat(props.bill.total_amount).toFixed(2)}
                        </span>
                        <span id="topbar-span3">
                            Added by {props.users[props.bill.biller_id].name} on {(props.bill.created_at).split('T')[0]}
                        </span>
                        <button id="edit-expense-btn">Edit expense</button>
                    </div>
                </div>
                <div id="friend-show-bill-main">
                    <div id="bill-participants">
                        <span id="bill-payer">
                            <img src={window.profilePic} />
                            <strong>{props.users[props.bill.biller_id].name}</strong> paid <strong>${parseFloat(props.bill.total_amount).toFixed(2)}</strong>
                        </span>
                    </div>
                </div>
            </div>
        </li>
        
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendShowItem);