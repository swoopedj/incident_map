import React from 'react'


class IncidentDetails extends React.Component {

  renderIncidentInfo() {
    if (this.props.incidentData) {
      const { address, description } = this.props.incidentData;

      return (
        <div className="details-col">
          <h4>Incident info:</h4>
          <span>{`Address: ${address.address_line1} ${address.city}, ${address.state}`}</span>
          <span>{`Event ID:  ${description.event_id}`}</span>
        </div>
      );
    }
  }

  renderWeatherInfo() {
    if(this.props.weatherData) {
      const { currently } = this.props.weatherData;

      return (
        <div className="details-col">
          <h4>Weather:</h4>
          <span>Conditions: {currently.summary}</span>
          <span>Temperature: {currently.temperature}</span>
          <span>Wind Speed: {currently.windSpeed}</span>
        </div>
      );
    }
  }

  render() {

    return (
      <section>
        <div className="details">
          {this.renderIncidentInfo()}
          {this.renderWeatherInfo()}
        </div>
      </section>
    );
  }


}

export default IncidentDetails;