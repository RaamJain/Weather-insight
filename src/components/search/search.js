import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOption, geo_url } from "../../api";
const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${geo_url}/cities?namePrefix=${inputValue}`, geoApiOption);
            const data = await response.json();
    
            if (data && data.data) {
                return {
                    options: data.data.map((city) => ({
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.country}`,
                    })),
                };
            } else {
                return { options: [] };
            }
        } catch (error) {
            return { options: [] };
        }
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return(
        <AsyncPaginate 
            placeholder = "Search for city"
            debounceTimeout={600}
            value = {search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;