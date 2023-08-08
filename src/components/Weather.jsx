import {
  IconSunFilled,
  IconWind,
  IconDroplets,
  IconSunrise,
  IconSunset,
} from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const api_key = 'ca6f425a16e6df0c0a6cd3a706a0ff8c';
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New Delhi');

  const handleTextChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
    setCity('');
  };

  const fetchWeatherData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${api_key}`
      )
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  useEffect(() => {
    fetchWeatherData();
    setCity('');
  }, []);

  function formatDateAndTime(date) {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const day = days[date.getDay()];
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // Convert to 12-hour format and determine AM/PM
    const amPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;

    // Add leading zero for single-digit minutes
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return {
      day: `${day}`,
      time: `${hours}:${formattedMinutes}${amPm}`,
    };
  }

  function convertUnixToIndianTime(unixTime) {
    const date = new Date(unixTime * 1000); // Convert UNIX timestamp to milliseconds
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000; // Calculate UTC time
    const indianTime = utcTime + 5.5 * 3600000; // Add 5 hours and 30 minutes for GMT+5:30
    const indianDate = new Date(indianTime);
    const hours = indianDate.getHours();
    const minutes = indianDate.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}${amPm}`;
  }

  const sunrise = weatherData
    ? convertUnixToIndianTime(weatherData.sys.sunrise)
    : null;
  const sunset = weatherData
    ? convertUnixToIndianTime(weatherData.sys.sunset)
    : null;

  const currentDate = new Date();

  const { day, time } = formatDateAndTime(currentDate);

  return (
    <div>
      <form
        className="sticky top-0 flex flex-col py-3 mb-3 bg-white"
        onSubmit={handleSubmit}
      >
        <div className="relative bg-white border border-gray-300 rounded-lg">
          <input
            type="text"
            value={city}
            onChange={handleTextChange}
            className="z-0 w-full pl-3 border-none rounded-lg h-14 focus:outline-none focus:ring-0"
            placeholder="Eg: New Delhi"
          />
          <div className="absolute top-2 right-2">
            <button
              type="submit"
              className="w-20 h-10 text-white rounded-lg bg-sky-500 hover:bg-sky-700 focus:bg-sky-500 focus:rounded-lg"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      {weatherData ? (
        <React.Fragment>
          <div className="flex flex-col px-5 md:items-stretch md:flex-row">
            <div className="w-full md:w-3/5">
              <div className="flex flex-col h-full p-5 rounded bg-amber-200">
                <div className="flex justify-between h-full">
                  <div>
                    <h2 className="text-4xl font-extrabold">
                      {weatherData.main.temp}
                      <sup className="text-2xl font-normal">&#8451;</sup>
                    </h2>
                    <h3 className="">
                      {weatherData.name}, {weatherData.sys.country}
                    </h3>
                    <h4 className="">
                      {day} {time}
                    </h4>
                  </div>
                  <div>
                    <IconSunFilled size={72} className="text-amber-400" />
                  </div>
                </div>
                <div className="flex justify-between p-2 mt-3 rounded shadow-md backdrop-blur-sm bg-white/30">
                  <div className="flex p-1">
                    <IconWind />
                    <h3 className="text-lg font-semibold">
                      {weatherData.wind.speed}
                      <small className="font-normal">Km/h</small>
                    </h3>
                  </div>
                  <div className="flex p-1">
                    <IconDroplets />
                    <h3 className="text-lg font-semibold">
                      {weatherData.main.humidity}
                      <small className="font-normal">%</small>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5 md:ms-3 md:h-full">
              <div className="flex my-3 md:flex-col md:my-0">
                <div
                  className={`w-1/2 bg-cover rounded text-white bg-sunrise md:w-full`}
                >
                  <div className="flex flex-col items-center w-full h-full p-5 rounded backdrop-brightness-75 bg-amber-300/30">
                    <IconSunrise />
                    <h3 className="text-3xl font-extrabold lowercase">
                      {sunrise}
                    </h3>
                    <h3>Sunrise</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center w-1/2 text-white bg-cover rounded bg-sunset ms-3 md:w-full md:ms-0 md:mt-3">
                  <div className="flex flex-col items-center w-full h-full p-5 rounded backdrop-brightness-75 bg-slate-900/30">
                    <IconSunset />
                    <h3 className="text-3xl font-extrabold lowercase">
                      {sunset}
                    </h3>
                    <h3>Sunset</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Weather;
