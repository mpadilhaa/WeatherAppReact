
import { useState } from 'react';
import axios from 'axios';
import { apikey } from './variable';

import {BsWind,BsFillDropletFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'

import './App.css';





const apiKey = apikey


function App() {

const [data, setData] = useState('');
const [location, setLocation] = useState('');

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=pt_br`;

const searchLocation = (e) => {
 
  if(e.key === 'Enter'){
  axios.get(url).then((res) => {
    setData(res.data)
    console.log(data)
  })
  setLocation("")
}
}



//flags 



//icon weather



      return (
  <div className="App">
   <div className="container">

   <h3>confira o clima de uma cidade:</h3>

    <div className='form' >
      
  <input type="text"
          value={location} 
          onChange={e => setLocation(e.target.value)}
          onKeyUp={searchLocation}
  />

</div>

  
<div className="result">
  
    <div className="city-status">
    {data.name ? 
    <h2> <span><HiLocationMarker size={25}/></span> {data.name}</h2> 
    : null }
    </div>

   

    

    <div className="city-results">
    {data.main ? 
    <h2>{data.main.temp} °C</h2> :
     null}

    <div className='weather'>
    {data.weather ? 
    <h4>{data.weather[0].description}</h4> :
     null}
    
    </div>
    </div>

    <div className="wind-humidity">
    {data.main ? 
    <div><p><BsFillDropletFill /> {data.main.humidity}% </p> </div>
    : null}
  
    {data.wind ? 
    <div><p><BsWind /> {data.wind.speed} km/h </p> </div>
    :null}
  
    </div>
  </div>
  </div>
</div>

   
    
  );
}

export default App;
