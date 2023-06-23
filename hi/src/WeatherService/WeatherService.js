
const API_KEY="b383e32a5b4711d8cb356ff3056ce110"



const makeIconUrl =(iconId)=>{
    return `https://openweathermap.org/img/wn/${iconId}@2x.png`
}




const getFormatedWeatherData=async(city,units="metric")=>{
    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const data =await fetch(URL).then((res)=>res.json()).then((data)=>data)

    const 
    {
        weather,
        main:{temp,feels_like,humidity,pressure,temp_max,temp_min},
        wind:{speed},
        sys:{country},
        name,
        dt,
    }=data;

    const {description,icon}= weather[0]

    
    return {
        description,
        iconurl:makeIconUrl(icon),
        temp,
        feels_like,
        humidity,
        pressure,
        temp_max,
        temp_min,
        speed,
        country,
        name,
        dt
    }
}

export {getFormatedWeatherData}