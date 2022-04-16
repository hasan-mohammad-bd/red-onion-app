import React, { useEffect, useState } from 'react';
import Dinner from '../Dinner/Dinner';

const DinnerPage = () => {
    const [breakfast, setBreakfast] = useState([]);
 
    useEffect(()=>{
        fetch("foodmanu.json")
        .then(res => res.json())
        .then(data => setBreakfast(data.dinner))

    },[])
    return (
        <div className='meal-allocation container'>
                  {
            breakfast.map(singleMeal => <Dinner singleMeal={singleMeal} key={singleMeal.id}></Dinner>)

        }
        </div>
    );
};

export default DinnerPage;