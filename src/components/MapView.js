import React from 'react';
import Marker from './Marker.js';
import GoogleMapReact from 'google-map-react';

export default class MapView extends React.Component {
    mapStyle = {
        width: "67%",
        height: "auto"
    };
    
    // NOTE: change defaultCenter to current location before launch begins!
    render () {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCtFjJt-cITgKBmX9yFTJPMbcxZtZsU-ks' }}
                    defaultCenter={{lat: 32.881200, lng: -117.237575}}
                    defaultZoom={11}>
                    <Marker
                        lat={this.props.latitude}
                        lng={this.props.longitude}
                        text="Location"
                        color='#cb3e39'
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
