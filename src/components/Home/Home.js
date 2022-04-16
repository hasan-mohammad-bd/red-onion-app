import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Search from "../Search/Search";
import "./Home.css";

const Home = () => {


  return (
    <div>
      <Search></Search>

      <div className="meal-section-nav py-2">
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/breakfast">Breakfast</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Lunch</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/dinner">Dinner</NavLink>
      </div>
      <div className="meal-section">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
