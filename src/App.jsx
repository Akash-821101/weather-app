import Header from "./component/Header"
import SearchBox from "./component/SearchBox"
import WeatherCard from "./component/WeatherCard"
import { useState } from "react"
import './App.css'
import DisplayText from "./component/DisplayText"


const App = () => {
  const [match, setMatch] = useState(false);
  const [isBlank, setIsBlank] = useState(true);
  const [result, setResult] = useState({
    location: {
      name: "",
      country: ""
    },
    current: {
      cloud: "",
      condition: {
        text: "",
        icon: ""
      },
      humidity: "",
      last_updated: "",
      temp_c: "",
      temp_f: "",
      wind_kph: ""
    }
  });
  
  const handleResult = (data) => {
    setIsBlank(false);
    console.log(data, "App");
    if(data){
      setResult((prev) => ({...prev, ...data}));
      setMatch(true);
    }else{
      setMatch(false);
    }
  }

  

  const { location, current } = result;
  console.log("result", result);
  return (
    <div className="app">
      <Header title='Weather App'/>
      <div className="container">
        <SearchBox onSearch={handleResult} />
        {!match ? (
          isBlank ? '' : (
          <div style={{ color: "red", margin: "8px" }}>
            No matching location found
          </div>
          )
        ) : (
          <>
            <DisplayText location={location} />
            <WeatherCard current={current} />
          </>
        )}
      </div>
    </div>
  )
}

export default App