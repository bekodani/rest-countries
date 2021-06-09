import React from 'react';
import {Link} from 'react-router-dom';

const Country = (props) => {
    return (

        <div className="country-card">
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/${props.name}`}>
            <div className="country-card-wrapper">
                <div className="country-card-img-wrapper">
                    <img src={props.flag} alt={props.name} />
                </div>
                <div className="country-card-text-wrapper">
                    <h2>{props.name}</h2>
                    <div><h6>Population: </h6><p>{props.population}</p></div>
                    <div><h6>Region: </h6><p>{props.region}</p></div>
                    <div><h6>Capital: </h6><p>{props.capital}</p></div>
                </div>   
            </div>
            </Link>
        </div>

    )
}

export default Country
