import React from 'react';
import { withRouter } from 'react-router-dom';
import LeftSidebar from './left_sidebar_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <header className="nav-bar">
                    <div className="nav-div">
                        <span className="nav-styled-name">g o D u t c h</span>
                        <a href="#" onClick={this.props.logout} className="nav-user-dropdown">LOGOUT {this.props.user.name}</a>
                    </div>
                </header>
                <br/>
                <section id="left-sidebar">
                    <LeftSidebar />
                </section>
                <section id="center-box">

                </section>
                <section id="right-sidebar">

                </section>
            </>
        );
    }
}

export default withRouter(NavBar);