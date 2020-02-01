import React from 'react';

import MapComponent from './components/MapComponent';
import IncidentDetails from './components/IncidentDetails';

import { getWeatherData } from './services/weatherData';
import { getIncidentData } from './services/incidentData';


class IncidentMap extends React.Component {
  constructor() {
    super();

    this.state = {
      incidentData: null,
      weatherData: null
    };
  }

  componentDidMount() {
    this.getIncidentData();
  }

  getIncidentData = async () => {
    const incidentData = await getIncidentData();
    this.setState({ incidentData });

    this.getWeatherData({
      lat: incidentData.address.latitude,
      long: incidentData.address.longitude,
      time: incidentData.description.event_opened
    });
  }

  getWeatherData = async (data) => {
    const weatherData = await getWeatherData(data);

    this.setState({ weatherData });
  }

  render() {

    const {
      incidentData,
      weatherData
    } = this.state;
    
    return (
      <main>
        <MapComponent incidentData={incidentData} />
        <IncidentDetails weatherData={weatherData} incidentData={incidentData} />
      </main>
    );
  }


}

export default IncidentMap;