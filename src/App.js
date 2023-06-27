import "./App.css";
import Search from "./components/search/search";
import currentWeather from "./components/current-weather/current-weather";

function App() {
  const handleOnSerchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSerchChange} />
    </div>
  );
}

export default App;
