import React from 'react';
import Marker from './Marker.js';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapReact from 'google-map-react';

const URL = 'ws://localhost:8000';

export default class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0
        }
    }
    
    mapStyle = {
        width: "67%",
        height: "auto"
    };
    
    ws = new WebSocket(URL)
    
    componentDidMount() {
		this.ws.onopen = () => {
      		console.log('map module connected')
    	}
		
		this.ws.onmessage = evt => {
			var newData = JSON.parse(evt.data)
			console.log(newData)
      		this.setState({
				latitude: newData.Lat,
                longitude: newData.Lon
			});
    	};
	}

    
    // NOTE: change defaultCenter to current location before launch begins!
    render () {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCtFjJt-cITgKBmX9yFTJPMbcxZtZsU-ks' }}
                    defaultCenter={{lat: 32.881200, lng: -117.237575}}
                    defaultZoom={11}>
                    <Marker
                        lat={this.state.latitude}
                        lng={this.state.longitude}
                        text="Location"
                        color='#cb3e39'
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
