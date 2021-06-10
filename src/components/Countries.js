import React, {useState, useEffect} from 'react';
import FilterCountry from './FilterCountry';
import FilterRegion from './FilterRegion';
import Country from './Country';
import axios from 'axios';




const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');
    const [region, setRegion] = useState('all');
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        const fetchRegions = async () => {
            setLoading(true);
            const res = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);
            setCountries(res.data);
            setLoading(false)
        }


        if(region === 'all') {
            const fetchCountries = async () => {
                setLoading(true);
                const res = await axios.get('https://restcountries.eu/rest/v2/all');
                setCountries(res.data);
                setLoading(false)
            }

/*                 .then(res => {
                    console.log(res)
                    setCountries(res.data)
                })
                .catch(err => {
                    console.log(err)
                }) */
            
            fetchCountries();
/*         axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => {
            console.log(res)
            setCountries(res.data)
        })
        .catch(err => {
            console.log(err)
        })} else if(region !== 'all') {
            axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
            .then(res => {
                console.log(res)
                setCountries(res.data)
            })
            .catch(err => {
                console.log(err)
            }) */} else if(region !== 'all') {
                fetchRegions()
            }
    }, [region])


    const filteredCountries = countries.filter((country)=> country.population > 1000000)


    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <div className="search-wrapper">
                <FilterCountry onChange={e=> setSearchCountry(e.target.value)}/>
                <FilterRegion value={region} onChange={e=> setRegion(e.target.value)} />
            </div>
            <div className="countries-wrapper">
            {filteredCountries.filter((country) => {
                if (searchCountry === "") {
                    return country;
                } else if(country.name.toLowerCase().includes(searchCountry.toLocaleLowerCase())) {
                    return country;
                } else
                return country.pupulation > 1000;
            }).map((country, index) => (
                <div  className="country-card" key={index}>
                        <Country name={country.name} flag={country.flag} population={country.population} region={country.region} capital={country.capital}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Countries
