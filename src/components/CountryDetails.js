import React from 'react'

const CountryDetails = (props) => {
    return (
        <div className="country-detail-card">
            <div className="country-detail-card-img-wrapper">
                <img src={props.flag} alt={props.name} /> 
            </div>
            <div className="country-detail-card-text-wrapper">
                <h2>{props.name}</h2>
                <div>
                    <h6>Native Name:</h6> <p>{props.nativeName}</p>
                </div>
                <div>
                    <h6>Population: </h6> <p>{props.population}</p>
                </div>
                <div>
                    <h6>Region: </h6> <p>{props.region}</p>
                </div>
                <div><h6>Capital: </h6> <p>{props.capital}</p></div>
                <div className="country-detail-bottom">
                <div><h6>Languages: </h6> {props.languages}</div>
                    <div><h6>Top Level Domain: </h6> <p>{props.topLevelDomain}</p></div>
                    <div><h6>Currencies: </h6> {props.currencies}</div>
                </div>
                <div className="border-countries-wrapper"><h6 className="border-countries-font">Border Countries: </h6> <ul className="border-ul-style">{props.borders}</ul></div>
{/*                 <div><h6>Languages: </h6> <p>{props.languages}</p></div> */}
            </div>
        </div>
    )
}

export default CountryDetails