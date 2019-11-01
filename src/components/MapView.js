import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapView extends React.Component {
  mapStyle = {
    width: "67%"
  };

  render () {
    return (
    <Map
          google={this.props.google}
          zoom={14}
          style={this.mapStyle}
          initialCenter={{ lat: 32.881200, lng: -117.237575}}
        />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCtFjJt-cITgKBmX9yFTJPMbcxZtZsU-ks"
})(MapView);
