import React from 'react';
import './Country.css'

const Country = (props) => {
    // const { region, area, name, population } = props.country;
    const { name, area, population, region, flags } = props.country;
    return (
        <div className='country bg-warning'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
            <p>Population: {population}</p>

            {/* Using Destructring for load data */}

            {/* <h2>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p><small>Area: {area}</small></p> */}

            {/* Directly loaded data from country */}
            {/* <h2>Country Name: {props.country.name.common}</h2>
            <p>Population: {props.country.population}</p>
            <p><small>Region: {props.country.region}</small></p>
            <p><small>Area: {props.country.area}</small></p> */}
        </div>
    );
};

export default Country;