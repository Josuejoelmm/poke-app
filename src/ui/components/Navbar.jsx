import React from 'react';
import './styles/Navbar.scss';
import logo from '../../images/nav-logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-inner">
                <div className="logo-container">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}