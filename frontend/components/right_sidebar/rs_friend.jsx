import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteFriend } from '../../actions/friendship_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        friendId: ownProps.match.params.friendId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteFriend: (id) => dispatch(deleteFriend(id))
    }
}

class RightSidebarFriend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <a href="#" id="rs-friend-balances-btn"><i className="icon-align-justify"></i></a>
                <a href="#" onClick={() => this.props.deleteFriend(this.props.friendId)} id="rs-friend-settings-btn"><i className="icon-cog icon-large"></i></a>
                <h3 id="rs-friend-text">YOUR BALANCE</h3>
                <div id="rs-balance-flex">
                    <div id="owe">you owe</div>
                    <div id="balance">$999.99</div>
                </div>
            </>
        );

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RightSidebarFriend));