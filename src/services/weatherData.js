import axios from 'axios'

import { WEATHER_DATA_BASE_URL } from '../constants'

export const getWeatherData = (data) => {
  const url = `weather/${data.lat},${data.long},${data.time}?exclude=miniutely,hourly,daily,alerts`;
  return axios(url)
    .then(response => response.json())
    .then(data => data.currently);
}