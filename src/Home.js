import React,{useState} from "react";
import "./style.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Search from "./card/Search";
import WeatherCard from "./card/WeatherCard";
function Home() {

  const [value, setValue] = useState("");
    const [city, setCity] = useState("");
    const[temp,setTemp]=useState("")
  function handleChange(e) {
      setValue(e.target.value);
    
    fetchApi(); 
  }
      const fetchApi = async () => {
    
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b24982bca818f3dea1c76357d4773f19`)
              .then(response => response.json())
              .then(data => {
                  console.log(data); 
                  setCity(data.name)
                  setTemp((data.main.temp-273.15).toFixed(1))
                  console.log(temp)
                  
              })
              .catch(error => {
                  console.error('Error fetching weather data:', error);
              });
      }

  return (
    <div className="weaterWrapper">
      <div className="header">
        <h1>
   
          <ThunderstormIcon style={{ fontSize: "30px", marginRight: "1rem" }} />
          Weather App
        </h1>
      </div>
      <div className="SearchFilter">
        <Search 
         onChange={(e)=> handleChange(e)}
         value={value}
        />
      </div>
      <div className="weatherCard">
        <WeatherCard 
        city={city}
        temp={temp}
        />
      </div>
    </div>
  );
}

export default Home;
