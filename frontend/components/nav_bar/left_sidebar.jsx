import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FriendIndexItem from './friend_index_item';

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
                    <Link to="/dashboard" id="ls-dashboard-link">Dashboard</Link>
                    <Link to="/recent" id="ls-recent-link"><i class="fas fa-flag"></i> Recent activity</Link>
                    <Link to="/all" id="ls-all-link"><i class="fas fa-list"></i> All expenses</Link>
                    <div className="ls-header">
                        <span>FRIENDS</span>
                        <a href="#"><i className="fas fa-plus"></i> add</a>
                    
                    </div>
                    {allFriends}
                </div>
            </>
        );
    }
} 

export default withRouter(LeftSidebar);