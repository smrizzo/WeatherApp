import axios from 'axios';

const API_KEY = 'ad53646911fe4a72ee9b744408141665';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;//template string ES6 sugar

export const FETCH_WEATHER = 'FETCH_WEATHER';//we will make a reducer that handles this 

export function fetchWeather(city) {
   const url = `${ROOT_URL}&q=${city},us`;
   const request = axios.get(url);

   console.log('Request: ', request);

   return {
      type: FETCH_WEATHER,
      payload: request
   };
}