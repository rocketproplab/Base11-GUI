import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const URL = 'ws://localhost:8000';

export default class Orientation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xTilt: 0,
            yTilt: 0
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
      		console.log('orientation module connected')
    	}
		
		this.ws.onmessage = evt => {
			var newData = JSON.parse(evt.data)
			console.log(newData)
      		this.setState({
				xTilt: newData.xTilt,
                yTilt: newData.yTilt
			});
    	};
	}

    getRotation = function (xTilt, yTilt) {
        return ((xTilt**2 + yTilt**2)**0.5)
    }

    render () {
        if (this.getRotation(this.state.xTilt, this.state.yTilt) > 30) {
            return (
                <Card style={{backgroundColor: 'red'}}>
                    <Typography variant="h5" component="h2" align="center">
                        Current Orientation
                    </Typography>
                    <Container>
                        <img src={require("../imgs/rocket.png")} height="256px" width="256px" style={{transform: `rotate(${this.getRotation(this.state.xTilt, this.state.yTilt)}deg)`}}></img>
                    </Container>
                    {this.getRotation(this.state.xTilt, this.state.yTilt)} degrees
                </Card>
            );
        } else {
            return (
                <Card style={this.cardStyle}>
                    <Typography variant="h5" component="h2" align="center">
                        Current Orientation
                    </Typography>
                    <Container style={{padding: "50px 25%"}}>
                        <img src={require("../imgs/rocket.png")} height="256px" width="256px" style={{transform: `rotate(${this.getRotation(this.state.xTilt, this.state.yTilt)}deg)`}}></img>
                    </Container>
                    {this.getRotation(this.state.xTilt, this.state.yTilt)} degrees
                </Card>
            );
        }
    }
}
