import React from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger
        return (
            <>
                <header className="nav-bar">
                    <div className="nav-div">
                        <span className="nav-styled-name">IMAGE GOES HERE</span>
                        <a href="#" onClick={this.props.logout} className="nav-user-dropdown">{this.props.user.name}</a>
                    </div>
                </header>
                <br/>
                <section id="left-sidebar">

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