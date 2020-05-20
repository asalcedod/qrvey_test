export default function filterCountries(searchText, maxResults) {
    return []
        .filter(country => {
            if (country.title.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
            if (country.keywords.includes(searchText)) {
                return true;
            }
            return false;
        })
        .slice(0, maxResults);
}
