import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import FriendListItem from './friend_list_item';

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
        const acceptedFriends = acceptedFriendIds.map( id => {
            return (
                <FriendListItem key={id} userId={id}/>
            );
        })

        const pendingFriends = pendingFriendIds.map(id => {
            return (
                <FriendListItem key={id} userId={id} />
            );
        })

        const allFriends = acceptedFriends.concat(pendingFriends);
        
        return (
            <>
                <div id="left-sidebar-box">
                    <NavLink to="/dashboard" id="ls-dashboard-link"><img height="16px" src={window.logo}/> Dashboard</NavLink>
                    <Link to="/recent" id="ls-recent-link"><i className="fas fa-flag"></i> Recent activity</Link>
                    <Link to="/all" id="ls-all-link"><i className="fas fa-list"></i> All expenses</Link>
                    <div className="ls-header">
                        <span>FRIENDS</span>
                        <a id="add-friend-link" onClick={() => this.props.openModal('addFriend')} href="#"><i className="fas fa-plus fa-sm"></i> add</a>
                    </div>
                    {allFriends}
                </div>
            </>
        );
    }
} 

export default withRouter(LeftSidebar);