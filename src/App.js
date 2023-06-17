import Search from "./components/search/search";

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
