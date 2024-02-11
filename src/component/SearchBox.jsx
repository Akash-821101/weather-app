import axios from "axios";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchBox = ({ onSearch }) => {


  const [search, setSearch] = useState("");
  let citiesStr = localStorage.getItem("recent_search");
  const searchArr = citiesStr ? JSON.parse(citiesStr) : [];
  const [recentSearches, setRecentSearches] = useState(searchArr);
  const weatherSearch = async (text) => {
    try {
      let res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=3d5ace4443ee4a399ca72411231607&q=${text}&aqi=no`
      );

      console.log(res.data);
      onSearch(res.data);
    } catch (e) {
        onSearch(null);
    }
  };

  useEffect(() => {
    localStorage.setItem("recent_search", JSON.stringify(recentSearches));
  }, [recentSearches])

  const handleChange = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  const searchCity = (e) => {
    weatherSearch(search);
    e.preventDefault();
    let cities = [];
    if(recentSearches){
      cities = [search, ...recentSearches];
    }
    if(cities.length > 5){
      cities.pop();
    }
    setRecentSearches(cities)
    

    setSearch('');
   
  }

  const handleCitySearch = (e, city) => {
    e.preventDefault();
    setSearch(city);
  }



  return (
<div style={{width: '100%', padding: '10px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
    <div className="search-box">
      <input
        className="input"
        placeholder="Search city or country"
        type="text"
        value={search}
        onChange={handleChange}
      />
      <span>Enter Location</span>
     <button onClick={searchCity}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="search"><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path></svg>
     </button>

    </div>
    <div className='recent-box' style={{display: `${search.length === 0 ? 'none' : 'block'}`}}>
         {recentSearches.map((item, index) => (<p href="#" key={index} onClick={(e) => handleCitySearch(e, item)}>{item}</p>))}
    </div>
</div>
  );
};

export default SearchBox;
