import React from 'react'

class IncidentDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      incidentData: null,
      weatherData: null
    };
  }

  render() {

    return (
      <section className="footer">
        <span>Details footer</span>
      </section>
    );
  }


}

export default IncidentDetails;