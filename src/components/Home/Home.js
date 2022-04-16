import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Breakfast from "../BreakFast/Breakfast";
import Search from "../Search/Search";
import "./Home.css";

const Home = () => {
    const [breakfast, setBreakfast] = useState();



    
    useEffect(()=>{
        fetch("foodmanu.json")
        .then(res => res.json())
        .then(data => setBreakfast(data.breakfast))

    },[])

  return (
    <div>
      <Search></Search>

      <div className="meal-section-nav py-4">
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/breakfast">Breakfast</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Lunch</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/dinner">Dinner</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
