import React, { useEffect, useState } from 'react';

const LunchPage = () => {
    const [breakfast, setBreakfast] = useState();
 
    useEffect(()=>{
        fetch("foodmanu.json")
        .then(res => res.json())
        .then(data => setBreakfast(data.lunch))

    },[])
    return (
        <div>
            
        </div>
    );
};

export default LunchPage;