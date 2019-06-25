import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {

    };
}

const mapDispatchToProps = dispatch => {
    return {

    };
}

class RecentActivity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <div id="recent-activity-box">
                    <img src={window.profilePic} />
                    <span>Feature Coming Soon!</span>
                </div>
            </>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentActivity);