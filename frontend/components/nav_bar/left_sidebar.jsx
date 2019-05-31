import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

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
        debugger
        const acceptedFriends = this.props.acceptedFriendIds.map( id => {
            return (
                <li className="friend" key={id}>{id}</li>
            );
        })

        const pendingFriends = this.props.pendingFriendIds.map(id => {
            return (
                <li className="friend" key={id}>{id}</li>
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
                    {allFriends}
                </div>
            </>
        );
    }
} 

export default withRouter(LeftSidebar);