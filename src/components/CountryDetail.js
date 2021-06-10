import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountryDetails from './CountryDetails';
import { BsArrowLeft } from 'react-icons/bs';
import {Link} from 'react-router-dom';



const CountryDetail = ({ match }) => {
    const [country, setCountry] = useState([]);






    useEffect(() => {
        const fetchCountries = async () => {
            const res = await axios.get(`https://restcountries.eu/rest/v2/name/${match.params.id}?fullText=true`);
            setCountry(res.data);
        }
        fetchCountries()
    }, [match.params.id])



    return (
        <div> 
                <Link to="/rest-countries/">
                    <button className="back-btn"><BsArrowLeft /> Back</button>
                </Link>

            {country.map((country, index) => (
                <div className="detail-card" key={index}>
                    <CountryDetails 
                        name={country.name}
                        nativeName={country.nativeName} 
                        flag={country.flag} 
                        population={country.population} 
                        region={country.region} 
                        capital={country.capital} 
                        topLevelDomain={country.topLevelDomain} 
                        currencies={country.currencies.map((curr,index)=>(
                            <p key={index}>{curr.code}</p>
                        ))} 

                        languages={country.languages.map((lang,index)=>(
                            <p key={index}>{lang.name}</p>
                        ))}

                        borders={country.borders.slice(0, 3).map((bord, index)=>(
                                <li key={index} className="border-li-style">{bord}</li>
                        ))}
                    />
                </div>
            ))}
        </div>
    )
}

export default CountryDetail
