import axios from 'axios'

import { DARK_SKY_KEY } from '../constants'

export const getWeatherData = (data) => {
  const url = `/forecast/${DARK_SKY_KEY}/${data.lat},${data.long},${data.time}?exclude=miniutely,hourly,daily,alerts`;
  return axios(url)
    .then(response => response.data);
}