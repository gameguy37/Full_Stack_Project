import React from 'react';
import { withRouter } from 'react-router-dom';

class RightSidebarAds extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2>GODUTCH ON THE GO</h2>
                <span>Get the free goDutch app and add IOUs from anywhere:</span>
                <img id="iphone" src={window.iPhoneLogo} />
                <img id="android" src={window.androidLogo} />
            </>
        )
    }
}

export default withRouter(RightSidebarAds);