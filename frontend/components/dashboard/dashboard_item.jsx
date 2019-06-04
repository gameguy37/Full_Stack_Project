import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        friend: state.entities.users[ownProps.friendId]
    }
}

const DashboardItem = (props) => {
    // if (!props.friend) {
    //     return null;
    // }
    return (
        <li>hey</li>
        // <NavLink to={`/friends/${props.friend.id}`} className="dashboard-item">
        //     <li>
        //         <img src={window.profilePic} height="30px" />
        //         <div id="dashboard-item-info">
        //             {props.friend.name}
        //             <span>owes you $52.67</span>
        //         </div>
        //     </li>
        // </NavLink>
    );
};

export default connect(mapStateToProps)(DashboardItem);