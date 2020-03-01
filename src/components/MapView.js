import React from 'react';
import Marker from './Marker.js';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapReact from 'google-map-react';

var data = require("../data");

export default class MapView extends React.Component {
    constructor(props) {
        super(props);
    }
    
    location = {
        latitude: data.Lat,
        longitude: data.Lon
    }
    
    mapStyle = {
        width: "67%",
        height: "auto"
    };


	// componentWillUnmount() {
	// 	clearInterval(this.timerID);
	// }
    
    // NOTE: change defaultCenter to current location before launch begins!
    render () {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCtFjJt-cITgKBmX9yFTJPMbcxZtZsU-ks' }}
                    defaultCenter={{lat: 32.881200, lng: -117.237575}}
                    defaultZoom={11}>
                    <Marker
                        lat={this.location.latitude}
                        lng={this.location.longitude}
                        text="Location"
                        color='#cb3e39'
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
