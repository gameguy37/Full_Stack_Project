import React from 'react';
import { connect } from 'react-redux';
import { deleteBill } from '../../actions/bills_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        friendId: ownProps.friendId,
        friend: state.entities.users[ownProps.friendId],
        amount: ownProps.amount,
        className: ownProps.className,
        bill: ownProps.bill,
        payment: ownProps.payment,
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteBill: bill => dispatch(deleteBill(bill))
    }
}

const FriendShowItem = (props) => {
    if (!props.bill) {
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
        owedAmount = (parseFloat(props.payment.initial_amount)).toFixed(2);
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
                <div id="friend-show-right">
                    <div id="this-person-paid">
                        <span>{friendName} paid</span>
                        <span id="tpp-amt">${billAmount}</span>
                    </div>
                    <div id="amount-owed">
                        <span>{whoLentWho}</span>
                        <span id={reactiveId}>{owedAmount}</span>
                    </div>
                </div>
                <div id="friend-show-delete">
                    <button onClick={() => props.deleteBill(props.bill.id)}>Delete</button>
                </div>
            </div>
        </li>
        
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendShowItem);