import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

class MapComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      defaultCenter: {
        lat: 37.5388,
        lng: -77.4336
      },
      zoom: 12
    };

  }

  placeIncidentMarker() {
    if(this.props.incidentData) {
      const { address } = this.props.incidentData;
      return (
        <Marker lat={address.latitude} lng={address.longitude} style={{ height: '10px', width: '10px', backgroundColor: 'red'}} />
      );
    }
  }

  placeApparatusMarkers() {
    if(this.props.incidentData && this.props.incidentData.apparatus.length) {
      const { apparatus } = this.props.incidentData;

      return apparatus.map(app => {
        return (
          <Marker key={app.car_id} lat={app.unit_status.dispatched.latitude} lng={app.unit_status.dispatched.longitude} style={{ height: '10px', width: '10px', backgroundColor: 'green'}} />
        );
      });
    }
  }

  render() {

    return (
      <section className="map-component" style={{ height: '75vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBiYN8zF0cHHcPaTaCRXETOM9njND2WVhI' }}
          defaultCenter={this.state.defaultCenter}
          defaultZoom={this.state.zoom}
        >
          {this.placeIncidentMarker()}
          {this.placeApparatusMarkers()}
        </GoogleMapReact>
      </section>
    );
  }


}

export default MapComponent;