const transformCountry = country_data => {
    const { name, region, population, capital, flag } = country_data[0];
    const data = {
        name,
        region,
        population,
        capital,
        flag
    }
    return data;
};

export default transformCountry;