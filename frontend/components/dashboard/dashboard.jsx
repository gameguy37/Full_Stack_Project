import React from 'react';

const mapStateToProps = state => {
    return {

    };
}

const mapDispatchToProps = dispatch => {
    return {

    };
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <>
                <div id="dashboard-box">
                    Dashboard
                </div>
            </>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);