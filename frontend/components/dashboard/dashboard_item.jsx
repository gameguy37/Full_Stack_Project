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

const DashboardItem = (props) => {

    let balanceDescription;
    if (props.className === "left-side") {
        balanceDescription = `you owe `;
    } else {
        balanceDescription = `owes you `;
    }

    return (
        
        <li>
            <Link to={`/friends/${props.friend.id}`} className={props.className}>
                <img src={window.profilePic} height="30px" />
                <div id="dashboard-item-info">
                    {props.friend.name}
                    {<span>{balanceDescription}<strong>${props.amount}</strong></span>}
                </div>
            </Link>
        </li>
        
    );
};

export default connect(mapStateToProps)(DashboardItem);