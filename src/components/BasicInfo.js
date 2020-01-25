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
const writeJsonFile = require('write-json-file');

export default class BasicInfo extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			alt: data.Alt,
			vel: data.Velocity
        }
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
		console.log("Last alt: " + alt_last)
		console.log("Diff: " + alt_step)

		let root = Math.pow((Math.pow(Math.sin(lat_step / 2), 2) + Math.pow(Math.cos(lat_last)*Math.cos(lat)*(Math.sin(lon_step / 2)), 2)), 0.5);
		let d = 2*(alt + earth_R)*Math.asin(root);

		return(Math.pow((Math.pow(alt_step, 2) + Math.pow(d, 2)), 0.5))
		// return(alt_step)
	}

    render () {
		return (
			<Card style={this.cardStyle}>
	            <Typography variant="h5" component="h2" align="left" style={{marginLeft: '3%', marginTop: '4%'}}>
	                Velocity: {this.state.vel} m/s
	            </Typography>
				<Typography variant="h5" component="h2" align="left" style={{marginLeft: '3%', marginBottom: '4%'}}>
	                Altitude: {this.state.alt} m
	            </Typography>
	        </Card>
		);
    }
}
