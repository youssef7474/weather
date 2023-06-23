import React, { useEffect, useState } from 'react';
import hotBg from "./assets/hot.jpg"
import coldBg from "./assets/cold.jpg"
import Description from './compounts/Description';
import { getFormatedWeatherData } from './WeatherService/WeatherService';


const App = () => {

  const [city,setCity]=useState("London")
  const [city2,setCity2]=useState("")
  const [weather,setWeather]=useState(null);
  const [units,setUnits]=useState("metric")
  const [unitToggle,setUnitToggle]=useState(false);
  const [bg,setBg]=useState(hotBg)


  useEffect(()=>{
    const featchWeatherData=async()=>{
      try {
        const data = await getFormatedWeatherData(city,units)
        setWeather(data);

        const threshold= units==="metric"?20:60;
        if(data.temp<=threshold)
        {
          setBg(coldBg);
        }else{
          setBg(hotBg)
        }
  
      } catch (error) {
        console.log(error)
      }
     
    }
    featchWeatherData()

  },[units,city,weather])


   


  /*const SearchHandler=(e)=>{
    if(e.keyCode===13)
    {
      setCity(e.currentTarget.value)
      e.currentTarget.blur()
    }
  }*/


  const buttonHandler =(e)=>{

    setUnitToggle(!unitToggle)

  }



  useEffect(() => {
    if (unitToggle===false)
    {
      setUnits("metric")
    }else if(unitToggle===true)
    {
      setUnits("imperial")
    }
  }, [unitToggle]);


  const handlerForm=(e)=>
  {
    e.preventDefault()
    setCity(city2)
    e.currentTarget.blur()
  }
  
  return (
    <div className='app' style={{backgroundImage:`url(${bg})`}}>
      <div className='overLay'>
      {
        weather&&(
          <div className='container'>

          <div className='section section-inputs'>
            <form onSubmit={handlerForm}>
              <input  onChange={(e)=>setCity2(e.target.value)} type='text' name='city' placeholder='Enter City Name....'></input>
              <div className='buttonSection'>
                <button type='submit' >search</button>
                <button type='button' onClick={(e)=>buttonHandler(e)}>{unitToggle?"°C":"°F"}</button>
              </div>
            </form>
         
          </div>

          <div className='section section-temprature'>
            <div className='icon'>
              <h3>{weather.name}, {weather.country}</h3>
              <img  src={weather.iconurl} alt='weather icon'></img>
              <h3>{weather.description}</h3>
            </div>

            <div className='temperature'>
              <h1>{Math.round(weather.temp)}°{units==="metric"?"C":"F"}</h1>
            </div>

          </div>

          
          
        

          

        {/* button description*/}
        <Description weather={weather} units={units}></Description>
      </div>
        )
      }

      </div>
    </div>
  );
}

export default App;
