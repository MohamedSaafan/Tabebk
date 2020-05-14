import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component{
    render() {
        const mapStyles = {
            width: '100%',
            height: '170vh',
            positions:'absolute',
            top:'40px'
          };
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
      }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyA4Fl0b-wsu8ksgttspSBmFgXIM87T5L7s'
  })(MapContainer);