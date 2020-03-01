import React from 'react';
import './FlightStatus.css';

const heartbeat = 1000;
var data = require("../data");

export default class FlightStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			FS: data.FS,
		}
	}

	statusStyle = {
		fontFamily: "Helvetica",
		marginTop: "20px",
		fontSize: "20px"
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
	
	launchIndicator = function (status) {
		if (status == 1) {
			return (<p className={"ongoing"} style={{color: 'orange'}}>Launch</p>)
		} else if (status >= 2) {
			return (<p className={"completed"} style={{color: 'green'}}>Launch</p>)
		} else {
			return (<p className={"not-completed"}>Launch</p>)
		}
	}
	
	climbIndicator = function (status) {
		if (status == 2) {
			return (<p className={"ongoing"} style={{color: 'orange'}}>Climb</p>)
		} else if (status >= 3) {
			return (<p className={"completed"} style={{color: 'green'}}>Climb</p>)
		} else {
			return (<p className={"not-completed"}>Climb</p>)
		}
	}
	
	coastIndicator = function (status) {
		if (status == 3) {
			return (<p className={"ongoing"} style={{color: 'orange'}}>Coast</p>)
		} else if (status >= 4) {
			return (<p className={"completed"} style={{color: 'green'}}>Coast</p>)
		} else {
			return (<p className={"not-completed"}>Coast</p>)
		}
	}
	
	apogeeIndicator = function (status) {
		if (status == 4) {
			return (<p className={"ongoing"} style={{color: 'orange'}}>Apogee</p>)
		} else if (status >= 5) {
			return (<p className={"completed"} style={{color: 'green'}}>Apogee</p>)
		} else {
			return (<p className={"not-completed"}>Apogee</p>)
		}
	}
	
	descentIndicator = function (status) {
		if (status == 5) {
			return (<p className={"ongoing"} style={{color: 'orange'}}>Descent</p>)
		} else if (status >= 6) {
			return (<p className={"completed"} style={{color: 'green'}}>Descent</p>)
		} else {
			return (<p className={"not-completed"}>Descent</p>)
		}
	}
	
	landedIndicator = function (status) {
		if (status == 6) {
			return (<p className={"ongoing"} style={{color: 'orange'}}>Landed</p>)
		} else if (status >= 7) {
			return (<p className={"completed"} style={{color: 'green'}}>Landed</p>)
		} else {
			return (<p className={"not-completed"}>Landed</p>)
		}
	}

	render () {
		return (
			<div style={this.statusStyle} className={'grid-container'}>
				<p className={"not-completed"}>Flight State:</p>
				{this.launchIndicator(this.state.FS)}
				{this.climbIndicator(this.state.FS)}
				{this.coastIndicator(this.state.FS)}
				{this.apogeeIndicator(this.state.FS)}
				{this.descentIndicator(this.state.FS)}
				{this.landedIndicator(this.state.FS)}
			</div>
		);
	}
}
