import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Header.css';
import logo from '../../images/Urban Riders.png'
import Bg from '../../images/Bg.png'

const Header = () => {

    return (
        <div className="col-md-4">
            <nav className=" navbar ">
                <ul >
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
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
        </div>



    );
};

export default Header;