import React from 'react'


class IncidentDetails extends React.Component {

  renderAddressInfo() {
    if (this.props.incidentData) {
      const { address } = this.props.incidentData;

      return (
          <span>{`Address: ${address.address_line1} ${address.city}, ${address.state}`}</span>
      );
    }
  }

  renderIncidentInfo() {
    if (this.props.incidentData) {
      const { description } = this.props.incidentData;

      return (
        <span>{`Event ID:  ${description.event_id}`}</span>
      );
    }
  }

  renderWeatherInfo() {
    if(this.props.weatherData) {
      const { currently } = this.props.weatherData;

      return (
        <div>
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
      <section className="details">
        <div>
          {this.renderAddressInfo()}
        </div>
        <div>
          {this.renderIncidentInfo()}
        </div>
        <div>
          {this.renderWeatherInfo()}
        </div>
      </section>
    );
  }


}

export default IncidentDetails;