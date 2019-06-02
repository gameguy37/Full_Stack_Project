import React from 'react';
import LoginForm from './session/login_form_container';
import { Link } from 'react-router-dom';

const Splash = () => (
    <>
        <header className="splash-header">
            <div className="flex-box">
                <span className="styled-name">GODUTCH</span>
                <nav className="nav-links">
                    <LoginForm /> or <Link to="/signup" className="header-signup-btn">Sign up</Link>
                </nav>
            </div>
        </header>
        <section className="splash-content">
            <span className="splash-title"><img height="64px" src={window.logo} /><h1>Split expenses with friends.</h1></span>
            <span className="splash-caption"><strong>Share</strong> bills and IOUs. <strong>Make sure</strong> everyone gets paid back. <strong>Totally free</strong> for web, iPhone, and Android.</span>
            <div className="splash-images">
                <img src={window.desktopDashboard} /><img src={window.mobileDashboard} />
            </div>
            <div>
                <Link to="/signup"><button className="splash-signup-btn"><div className="flex-column">Get started now<br /><span>(it's free!)</span></div></button></Link>
            </div>
        </section>
    </>
);

export default Splash;


