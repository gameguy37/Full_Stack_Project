import React from 'react';

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
                    Recent
                </div>
            </>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentActivity);