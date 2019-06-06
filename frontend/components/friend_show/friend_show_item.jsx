import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        friend: state.entities.users[ownProps.friendId],
        amount: ownProps.amount,
        className: ownProps.className,
    }
}

const FriendShowItem = (props) => {
    if (!props.amount) {
        return null;
    }
    
    // if (totalBalanceUserIsOwed - totalBalanceUserOwes < 0) {
        //     totalBalance = "negative";
        //     negativeBalance = "- ";
        // } else {
        //     totalBalance = "positive";
        //     negativeBalance = "";
        // }
        // console.log(friendOwesYou);
    // }

    // let balanceDescription;
    // if (props.className === "x-lent-you") {
    //     balanceDescription = `you owe `;
    // } else {
    //     balanceDescription = `owes you `;
    // }

    return (
        
        <li className={props.className}>
            Tootlio
            {/* <Link to={`/friends/${props.friend.id}`} className={props.className}> */}
                {/* <img src={window.profilePic} height="30px" />
                <div id="dashboard-item-info">
                    {props.friend.name}
                    {<span>{balanceDescription}<strong>${props.amount}</strong></span>}
                </div> */}
            {/* </Link> */}
        </li>
        
    );
};

export default connect(mapStateToProps)(FriendShowItem);