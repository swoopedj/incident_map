import React from 'react'

const infoWindowStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '130px',
  height: '130px',
  backgroundColor: '#fff',
  borderRadius: '10%',
  padding: '5px',
  position: 'relative',
  top: '-145px',
  left: '-70px'
}

class Marker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showInfoWindow: false
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  infoWindow(data) {
    if(data && this.props.incidentMarker) {
      return this.renderIncidentInfo(data);
    } else if (data) {
      return this.renderApparatusInfo(data)
    }
  }

  renderApparatusInfo(data) {
    return (
      <div style={infoWindowStyles}>
        <strong>Car ID: </strong><span>{data.car_id}</span>
        <strong>Unit type: </strong><span>{data.unit_type}</span>
        <strong>Dispatched: </strong><span>{data.unit_status.dispatched.timestamp}</span>
        <strong>Arrived: </strong><span>{data.unit_status.arrived.timestamp}</span>
      </div>
    );

  }

  renderIncidentInfo(data) {
    return (
      <div style={infoWindowStyles}>
        <strong>Address: </strong><span>{data.address_line1}</span><span>{data.city}</span><span>{data.state}</span>
        <strong>Type: </strong><span>{data.type}: </span><span>{data.subtype}</span>
      </div>
    );
  }

  onMarkerClick(e) {
    this.setState({
      showInfoWindow: !this.state.showInfoWindow
    })
  }

  render() {

    return (
      <div className="marker" style={ this.props.style } onClick={this.onMarkerClick}>
        {this.state.showInfoWindow && this.infoWindow(this.props.infoWindowData)}
      </div>
    );
  }


}

export default Marker;
