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
                <div id="rs-balance-flex">
                    <div id="owe">you owe</div>
                    <div id="balance">$XXX.XX</div>
                </div>
            </>
        );

    }
}

export default withRouter(RightSidebarAll);