import React from 'react';
import {FaArrowDown,FaArrowUp,FaWind} from "react-icons/fa"
import {BiHappy} from "react-icons/bi"
import {MdCompress,MdOutlineWaterDrop} from "react-icons/md"
import "./Description.css"



const Description = ({weather,units}) => {

    const tempUnits =units==="metric"?"°C":"°F";
    const windUnits=units==="metric"?"°C":"°F";

  
    const cards=
    [
        {
            id:1,
            icon:<FaArrowDown></FaArrowDown>,
            title:"min",
            data:weather.temp_min.toFixed(),
            unit:tempUnits,
        },
        {
            id:2,
            icon:<FaArrowUp></FaArrowUp>,
            title:"max",
            data:weather.temp_max.toFixed(),
            unit:tempUnits,
        }
        ,
        {
            id:3,
            icon:<BiHappy></BiHappy>,
            title:"feels like",
            data:weather.feels_like.toFixed(),
            unit:tempUnits,
        }
        ,
        {
            id:4,
            icon:<MdCompress></MdCompress>,
            title:"pressure",
            data:weather.pressure,
            unit:"hPa",
        }
        ,
        {
            id:5,
            icon:<MdOutlineWaterDrop></MdOutlineWaterDrop>,
            title:"humidity",
            data:weather.humidity,
            unit:"%",
        }
        ,
        {
            id:6,
            icon:<FaWind></FaWind>,
            title:"wind speed",
            data:weather.speed,
            unit:windUnits,
        }
    ]

    const cardData=cards.map((el)=>(
        <div key={el.id} className='card'>
            <div className='description-card-icon'> 
                {el.icon}
                <small>{el.title}</small>
            </div>
            <h2>{el.data} {el.unit}</h2>
        </div>
    ))
 
  return (
    <div className='section section-description'>
        {cardData}
    </div>
  );
}

export default Description;
