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

      <div className="meal-section-nav py-3">
        <NavLink to="/breakfast">Breakfast</NavLink>
        <NavLink to="/">Lunch</NavLink>
        <NavLink to="/dinner">Dinner</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
