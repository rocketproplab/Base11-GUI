import React from 'react';

// Frequency of updates for the flight status, in ms
const heartbeat = 1000;

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

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

	headerStyle = {
    	backgroundColor: "#4B4B4B",
    	margin: "0px",
    	padding: "0px",
    	height: "75px",
    	width: "auto",
    	color: "#FFFFFF",
    	borderRadius: "0px",
    	fontFamily: "Helvetica",
	};

	render () {
		return (
			<div style={this.headerStyle}>
      			<span style={{textAlign: "right", float: "right", paddingRight: "20px", marginTop: "20px", fontSize: "14px"}}>
        			{this.state.date.getMonth() + 1}/{this.state.date.getDate()}/{this.state.date.getFullYear()} <br></br> {this.state.date.toLocaleTimeString()} UTC-{this.state.date.getTimezoneOffset() / 60}
      			</span>
      			<span style={{float: "left", padding: "5px", marginLeft: "10px"}}>
        			<img src={require("../imgs/RPL-logo.png")} height="65px" width="175px"></img>
      			</span>
      			<span style={{textAlign: "center", display: "table", margin: "auto", alignContent: "center", paddingTop: "30px", marginTop: "0px", fontSize: "20px"}}>
        			Marginal Stability Telemetry Dashboard
      			</span>
    		</div>
		);
	}
}
