import React, { useEffect, useState } from 'react';
import Lunch from '../Lunch/Lunch';

const LunchPage = () => {
    const [breakfast, setBreakfast] = useState();
 
    useEffect(()=>{
        fetch("foodmanu.json")
        .then(res => res.json())
        .then(data => setBreakfast(data.lunch))

    },[])
    return (
        <div className='meal-allocation container'>
                  {
            breakfast?.map(singleMeal => <Lunch singleMeal={singleMeal} key={singleMeal.id}></Lunch>)

        }
        </div>
    );
};

export default LunchPage;