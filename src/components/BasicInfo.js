import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class BasicInfo extends React.Component {
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

    render () {
		return (
			<Card style={this.cardStyle}>
	            <Typography variant="h5" component="h2" align="left" style={{marginLeft: '3%', marginTop: '4%'}}>
	                Velocity: {this.props.vel} m/s
	            </Typography>
				<Typography variant="h5" component="h2" align="left" style={{marginLeft: '3%'}}>
	                Altitude: {this.props.alt} m
	            </Typography>
				<Typography variant="h5" component="h2" align="left" style={{marginLeft: '3%', marginBottom: '4%'}}>
	                Projected Alt: {this.props.projAlt} m
	            </Typography>
	        </Card>
		);
    }
}
