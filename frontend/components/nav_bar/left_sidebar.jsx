import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class LeftSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ui: { modal: null },
        };

    }

    render() {
        
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
                    <span className="header">FRIENDS</span>
                    {allFriends}
                    <div id="invite-box">
                        <span id="invite-box-title">Invite friends</span>
                        <div id="invite-box-fields">
                            <input id="invite-box-input" placeholder="Enter an email address"></input>
                            <br/>
                            <button onClick={() => this.props.openModal('newfriend')} id="invite-box-btn">Send invite</button>
                        </div>
                    </div>

                </div>
            </>
        );
    }
} 

export default withRouter(LeftSidebar);