import React, { useEffect, useState } from 'react';
import Breakfast from '../Breakfast';
import "./BreakfastPage.css"

const BreakfastPage = () => {
    const [breakfast, setBreakfast] = useState();



    
    useEffect(()=>{
        fetch("foodmanu.json")
        .then(res => res.json())
        .then(data => setBreakfast(data.breakfast))

    },[])

    return (
        <div className='meal-allocation container'>
                  {
            breakfast?.map(singleMeal => <Breakfast singleMeal={singleMeal} key={singleMeal.id}></Breakfast>)

        }
        </div>
    );
};

export default BreakfastPage;