import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoApiOptions, url } from "../../api";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${url}?minPopulation=1000000&namePrefix=${inputValue}`,
        GeoApiOptions
      );
      let result = await response.json();
      result = {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
