import React from "react";
import "./Header.css";
import img from "../../images/logo2.png";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="sticky-top bg-light">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div onClick={()=>navigate("/")} className="img-holder">
          <img src={img} alt="" />
        </div>
        <nav>
          <Link to="/orders">
            <FiShoppingCart></FiShoppingCart>
          </Link>
          <Link to="/login">Login</Link>
          <Link className="signup-btn" to="/Signup">Sign up</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
