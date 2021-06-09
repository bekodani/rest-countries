import React from 'react';

const FilterCountry = (props) => {
    return (
        <div className="input-wrapper">
            <input 
                name="name" 
                type="text" 
                placeholder="Search for a country.." 
                onChange={props.onChange} 
            />
        </div>
    )
}

export default FilterCountry;


