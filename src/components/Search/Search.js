import React from 'react';
import "./Search.css"

const Search = () => {
    return (
        <div className='search-bar d-flex justify-content-center align-items-center'>
            <div>
            <h1 className='heading'>Best food is waiting for your bally</h1>
            <div className='text-center py-3'>
            <input className='input-field w-50' type="search" name="search" id="search" placeholder='Search food items'/>
            <button className='search-btn'>Search</button>
            </div>
            </div>
        </div>
    );
};

export default Search;