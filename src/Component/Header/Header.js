import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <h1>Urban Riders</h1>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/login">Destination</Link>
                </li>
                <li>
                    <Link to="/login">Blog</Link>
                </li>
                <li>
                    <Link to="/login">Contact</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;