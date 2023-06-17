import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoApiOptions, GEO_API_URL } from "../../api";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const loadOptions = (inputValue) => {
    try {
      const response = fetch(GEO_API_URL + inputValue, GeoApiOptions);
      const result = response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    return;
  };
  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadingOptions={loadOptions}
    />
  );
};

export default Search;
