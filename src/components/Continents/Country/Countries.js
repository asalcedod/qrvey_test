import React from 'react';

const Countries = ( {continent, data} ) => { 

    const strToComponents = data => {
        return (
            data.map((country, index) =>  country.region === continent ? <div><img src={country.flag} height="15"width="15" /><span>{country.name}</span></div> : <span></span>)
        )
    };

    return(
        <div className="Countries">{strToComponents(data)}</div>   
    )
}

export default Countries