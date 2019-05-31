import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import FriendIndexItem from './friend_index_item';
import UsersIndex from '../users/users_index_container';

class LeftSidebar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ui: { modal: null },
        };

    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { acceptedFriendIds } = this.props;
        const { pendingFriendIds } = this.props;
        // debugger
        const acceptedFriends = acceptedFriendIds.map( id => {
            return (
                <FriendIndexItem key={id} userId={id}/>
            );
        })

        const pendingFriends = pendingFriendIds.map(id => {
            return (
                <FriendIndexItem key={id} userId={id} />
            );
        })

        const allFriends = acceptedFriends.concat(pendingFriends);
        
        return (
            <>
                <div id="left-sidebar-box">
                    <NavLink to="/dashboard" id="ls-dashboard-link">Dashboard</NavLink>
                    <NavLink to="/recent" id="ls-recent-link">Recent activity</NavLink>
                    <NavLink to="/all" id="ls-all-link">All expenses</NavLink>
                    <div className="ls-header">
                        <span>FRIENDS</span>
                        <a href="#"><i className="fas fa-plus"></i> add</a>
                    
                    </div>
                    {/* <UsersIndex /> */}
                    {allFriends}
                </div>
            </>
        );
    }
} 

export default withRouter(LeftSidebar);