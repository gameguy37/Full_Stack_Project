import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import { Switch } from 'react-router-dom';
import LeftSidebar from '../left_sidebar/left_sidebar_container';
import RightSidebar from '../right_sidebar/right_sidebar';
import Dashboard from '../dashboard/dashboard';
import FriendShow from '../friend_show/friend_show';
import RecentActivity from '../recent_activity/recent_activity';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <header className="nav-bar">
                    <div className="nav-div">
                        <span className="nav-styled-name">GODUTCH</span>
                        <span onClick={this.props.logout} className="nav-user-dropdown"><img src={window.profilePic} />Logout {this.props.user.name} <b className="caret" /></span>
                    </div>
                </header>
                <br/>
                <section id="left-sidebar">
                    <LeftSidebar />
                </section>
                <section id="center-box">
                    <Switch>
                        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                        <ProtectedRoute path="/friends/:friendId" component={FriendShow} />
                        <ProtectedRoute exact path="/recent" component={RecentActivity} />
                    </Switch>
                </section>
                <section id="right-sidebar">
                    <RightSidebar />
                </section>
            </>
        );
    }
}

export default withRouter(NavBar);