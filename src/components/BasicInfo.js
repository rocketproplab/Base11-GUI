import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const URL = 'ws://localhost:8000';

export default class BasicInfo extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			alt: 0,
			vel: 0
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
	
	ws = new WebSocket(URL)

	componentDidMount() {
		this.ws.onopen = () => {
      		console.log('basicinfo module connected')
    	}
		
		this.ws.onmessage = evt => {
			var newData = JSON.parse(evt.data)
			console.log(newData)
      		this.setState({
				alt: newData.Alt,
				vel: newData.Vel
			});
    	};
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
