import React from 'react';


const FilterRegion = (props) => {

    return (
        <div className="option-wrapper">
            <label className="region-filter">Filter by Region</label>
            <select value={props.value} onChange={props.onChange}>
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}

export default FilterRegion
