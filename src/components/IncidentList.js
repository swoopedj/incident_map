import React from 'react'


class IncidentList extends React.Component {
  constructor() {
    super();

    this.state = {
      incidentList: [],
      selectedIncident: null
    };
  }

  // componentDidMount() {
  //   this.getIncidentList();
  // }

  // getIncidentList = async () => {
  //   const incidentList = await getIncidentData();
  //   this.setState({ incidentList });
  // }

  mapIncidents = () => {
    const { incidentList } = this.state

    return incidentList.map(incident => {
      return (
        <span>{ incident.address.address_line1 }</span>
      );
    });
  }

  render() {

    return (
      <section className="side-bar">
        <span>Incident List</span>
        {this.mapIncidents()}
      </section>
    );
  }


}

export default IncidentList;