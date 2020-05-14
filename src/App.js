import React, {useState,useEffect} from 'react';
import './App.css';
import Moment from 'react-moment';

function App() {
  const api = {
    key: "e0b3d83f5334432ea6f5522dac4052da",
    base: "https://api.weatherbit.io/v2.0/"

  };
  const [query, setQuary] = useState('');
  const [weather, setweather] = useState({});

  const search = evt =>{
    if (evt.key === "Enter") {
      fetch(`${api.base}current?city=${query}&key=${api.key}`)
      .then(res => res.json())
      .then(result =>{ 
        setweather(...result.data);
        setQuary('');
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };

  const searchButtonPress = () =>{
    fetch(`${api.base}current?city=${query}&key=${api.key}`)
    .then(res => res.json())
    .then(result =>{ 
      setweather(...result.data);
      setQuary('');
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  useEffect(() => {
    fetch(`${api.base}current?city=Colombo&key=${api.key}`)
    .then(res => res.json())
    .then(result =>{ 
      setweather(...result.data);
      setQuary('');
      console.log("OK");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  },[]);

  
  const dateNow = Date();
  
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuary(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <div className="search-button-box">
            <button 
            className="search-button"
            onClick={() => searchButtonPress()}
            >
            Search
          </button>
          </div>
          <div className="location-box">
            <div className="location">{weather.city_name}</div>
            <Moment className="date" format="LL">{dateNow}</Moment>
          </div>
          <div className="weather-box">
            <div className="temp">{weather.app_temp}°C</div>
            <div className="weather">{{...weather.weather}.description}</div>
          </div>
        </div> 
        
      </main>
      
    </div>
  );
}

export default App;
