import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class Orientation extends React.Component {
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

    getRotation = function (xTilt, yTilt) {
        return ((xTilt**2 + yTilt**2)**0.5)
    }

    render () {
        if (this.getRotation(this.props.xTilt, this.props.yTilt) > 30) {
            return (
                <Card style={{backgroundColor: 'red'}}>
                    <Typography variant="h5" component="h2" align="center">
                        Current Orientation
                    </Typography>
                    <Container>
                        <img src={require("../imgs/rocket.png")} height="256px" width="256px" style={{transform: `rotate(${this.getRotation(this.props.xTilt, this.props.yTilt)}deg)`}}></img>
                    </Container>
                    {this.getRotation(this.props.xTilt, this.props.yTilt)} degrees
                </Card>
            );
        } else {
            return (
                <Card style={this.cardStyle}>
                    <Typography variant="h5" component="h2" align="center">
                        Current Orientation
                    </Typography>
                    <Container style={{padding: "50px 25%"}}>
                        <img src={require("../imgs/rocket.png")} height="256px" width="256px" style={{transform: `rotate(${this.getRotation(this.props.xTilt, this.props.yTilt)}deg)`}}></img>
                    </Container>
                    {this.getRotation(this.props.xTilt, this.props.yTilt)} degrees
                </Card>
            );
        }
    }
}
