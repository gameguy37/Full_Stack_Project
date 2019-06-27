import React from 'react';
import { withRouter } from 'react-router-dom';

class RightSidebarAll extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <h3 id="rs-all-text">YOUR TOTAL BALANCE</h3>
            </>
        );

    }
}

export default withRouter(RightSidebarAll);