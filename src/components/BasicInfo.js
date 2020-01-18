import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const heartbeat = 1000;
var data = require("../data");

export default class BasicInfo extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            lat: data.Lat,
			lon: data.Lon,
			alt: data.Alt,
			ts: data.timestamp
        }

		var lat_last = 0;
		var lon_last = 0;
		var alt_last = 0;
		var ts_last = 1574453804.354888;
    }

    cardStyle = {
        card: {
            minWidth: 275,
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    };

    componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			heartbeat
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.lat_last = this.state.lat;
		this.lon_last = this.state.lon;
		this.alt_last = this.state.alt;
		this.ts_last = this.state.ts;

		this.setState({
			date: new Date()
		});
	}

	getSpeed = function(lat, lon, alt, ts, lat_last, lon_last, alt_last, ts_last) {
		let time_step = ts - ts_last;
		let earth_R = 6371000;
		let lat_step = lat - lat_last;
		let lon_step = lon - lon_last;
		let alt_step = alt - alt_last;

		let root = Math.pow((Math.pow(Math.sin(lat_step / 2), 2) + Math.pow(Math.cos(lat_last)*Math.cos(lat)*(Math.sin(lon_step / 2)), 2)), 0.5);
		let d = 2*(alt + earth_R)*Math.asin(root);

		return(Math.pow((Math.pow(alt_step, 2) + Math.pow(d, 2)), 0.5))
	}

    render () {
		return (
			<Card style={this.cardStyle}>
	            <Typography variant="h5" component="h2" align="left" style={{marginLeft: '3%', marginTop: '4%'}}>
	                Speed: {this.getSpeed(this.state.lat, this.state.lon, this.state.alt, this.state.ts, this.lat_last, this.lon_last, this.alt_last, this.ts_last)} m/s
	            </Typography>
				<Typography variant="h5" component="h2" align="left" style={{marginLeft: '3%', marginBottom: '4%'}}>
	                Altitude: {this.state.alt} m
	            </Typography>
	        </Card>
		);
    }
}
