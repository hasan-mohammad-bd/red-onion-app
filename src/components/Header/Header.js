import React from 'react';
import "./Header.css"
import img from "../../images/logo2.png"
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container d-flex justify-content-between align-items-center py-3'>
            <div className="img-holder ">
                <img src={img} alt="" />
            </div>
            <nav>
                <Link to="/orders"><FiShoppingCart></FiShoppingCart></Link>
                <Link to="/login">Login</Link>
                <Link to="/Signup">Sign up</Link>
            </nav>
        </div>
    );
};

export default Header;