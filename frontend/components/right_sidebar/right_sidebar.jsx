import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import RightSidebarAds from './rs_ads';
import RightSidebarAll from './rs_all';
import RightSidebarFriend from './rs_friend';
import { ProtectedRoute } from '../../util/route_util';

class RightSidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <>
                <div id="right-sidebar-box">
                    <Switch>
                        <ProtectedRoute exact path="/all" component={RightSidebarAll} />
                        <ProtectedRoute path="/friends/:friendId" component={RightSidebarFriend} />
                        <ProtectedRoute path="/" component={RightSidebarAds} />
                    </Switch>
                </div>
            </>
        );

    }
}

export default withRouter(RightSidebar);