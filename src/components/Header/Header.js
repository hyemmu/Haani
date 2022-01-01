import React from 'react';

const Header = () => {
    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
                <div className="container header">
                    {/* Navbar Brand*/}
                    <a className="navbar-brand" href="/">
                        <h1>EBA</h1>
                    </a>
                    <div className="ml-auto" />
                    
                    {/* Navbar Action Button */}
                    <ul className="navbar-nav action">
                        <li className="nav-item ml-3">
                            <a href="/" className="btn ml-lg-auto btn-bordered-white">Home</a>
                        </li>
                        <li className="nav-item ml-3">
                            <a href="#exp" className="btn ml-lg-auto btn-bordered-white">Explore Events</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;