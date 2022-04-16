import React from 'react';
import "./BreakFast.css"

const Breakfast = ({singleMeal}) => {
    


    // const {img, name, des} = props.singleMeal;
    return (
        <div className='card1'>
            <img className='img-fluid' src={singleMeal?.img} alt="" />
            <h5>{singleMeal?.name}</h5>
            <p>{singleMeal?.des}</p>
            <h4>{singleMeal?.price}</h4>

        </div>
    );
};

export default Breakfast;