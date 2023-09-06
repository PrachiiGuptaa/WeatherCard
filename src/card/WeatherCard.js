import React,{useEffect, useState} from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./WeatherCard.css"
function WeatherCard(props) {
const[bg,setBg]=useState('')

const value= props.temp ;
    useEffect(() => {
        if(value > 30 ){
            setBg("url(https://static.toiimg.com/thumb/msid-88039346,imgsize-748251,width-400,resizemode-4/88039346.jpg)")
            return;
        }
        else if (value <= 30 && value >= 2 ) {
               setBg("url(https://static.toiimg.com/thumb/msid-89131922,width-400,resizemode-4/89131922.jpg)")
               return;
        }
        else if (value <=2) {
               setBg("url(https://www.thestar.com/content/dam/thestar/news/canada/2019/02/14/environment-canada-launches-its-own-weather-app/weather_app.jpg)") 
               return;  
        } 
}, [value])

  return (
      <div className='cardContainer' style={{backgroundImage:bg}}>
          <div className='cardContainer1'>
          <h2>{
 props.city
          }</h2>
          <p>India</p>
          <div className='detailsIcon'>
             
              <h1> <WbSunnyIcon style={{ fontSize: "50px", marginRight: "1rem" }} />{props.temp}&deg;C</h1>
          </div>
          </div>
      </div>
  )
}

export default WeatherCard