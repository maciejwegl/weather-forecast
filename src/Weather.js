import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './Weather.css';
import WeatherItem from "./WeatherItem";
import SearchConsole from "./SearchConsole";

const Weather = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [afterFilter, setAfterFilter] = useState([]);

    useEffect(()=>{
        axios.get('https://danepubliczne.imgw.pl/api/data/synop')
        .then((response)=> {
            setWeatherData(response.data);
            setAfterFilter(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);

    const filterData = (searchData) => {
       
        const filteredData = weatherData.filter(weatherItem => weatherItem.stacja.toLowerCase().includes(searchData));

        setAfterFilter(filteredData);
    }

    

    return (
        <div className="weather">
            <div className="listHeader">
                <SearchConsole filterData={filterData} />
            </div>

            <div className="itemsList">
                {afterFilter.map((weatherItem) => {
                    return (
                        <WeatherItem weatherItem ={weatherItem} key={weatherItem.id_stacji} /> 
                    )
                })}    
            </div>
        </div>
    );
}

export default Weather ;