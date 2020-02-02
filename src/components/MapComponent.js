import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

const defaultCenter = {
  lat: 37.5388,
  lng: -77.4336
};

const defaultZoom = 12;

const markerStyles = {
  height: '15px',
  width: '15px',
  borderRadius: '50%',
  backgroundColor: 'green'
}

class MapComponent extends React.Component {

  placeIncidentMarker() {
    if(this.props.incidentData) {
      const { address, description } = this.props.incidentData;
      return (
        <Marker
          lat={address.latitude}
          lng={address.longitude}
          incidentMarker
          style={{ ...markerStyles, backgroundColor: 'red' }}
          infoWindowData={{...address, ...description}}
        />
      );
    }
  }

  placeApparatusMarkers() {
    if(this.props.incidentData && this.props.incidentData.apparatus.length) {
      const { apparatus } = this.props.incidentData;

      return apparatus.map(app => {
        return (
          <Marker 
            key={app.car_id} 
            lat={app.unit_status.dispatched.latitude} 
            lng={app.unit_status.dispatched.longitude} 
            infoWindowData={app} 
            style={{ ...markerStyles, backgroundColor: 'green' }}
          />
        );
      });
    }
  }

  render() {

    return (
      <section className="map-component" style={{ height: '75vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBiYN8zF0cHHcPaTaCRXETOM9njND2WVhI' }}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
        >
          {this.placeIncidentMarker()}
          {this.placeApparatusMarkers()}
        </GoogleMapReact>
      </section>
    );
  }


}

export default MapComponent;