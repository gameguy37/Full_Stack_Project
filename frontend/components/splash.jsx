import React from 'react';
import LoginForm from './session/login_form_container';
import { Link } from 'react-router-dom';

const Splash = () => (
    <div>
        <header className="splash-header">
            <div className="flex-box">
                <span className="styled-name">goDutch</span>
                <nav className="nav-links">
                    <LoginForm /> or <Link to="/signup" className="header-signup-btn">Sign up</Link>
                    {/* <button className="header-login-btn">Log in</button> or <Link to="/signup" className="header-signup-btn">Sign up</Link> */}
                    {/* <LoginForm /> */}
                </nav>
            </div>
        
        </header>
    </div>
);

export default Splash;


