import React from 'react';

const heartbeat = 1000;
var data = require("../data");

export default class ChuteStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			DS: data.PS_drogue,
			MS: data.PS_main,
			FS: data.FS
		}

	}
	divStyle = {
		marginRight: "42%",
		marginBottom: "10px"
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
	
	drogueStatus = function(flightState, drogueState) {
		if (drogueState == 1) {
			if (flightState <= 4) {
				return (<p className={"completed"}>Drogue</p>)
			} else {
				return (<p className={"completed"} style={{color: 'red'}}>Drogue</p>)
			}
		} else {
			return (<p className={"not-completed"}>Drogue</p>)
		}
	}
	
	mainStatus = function(flightState, mainState) {
		if (mainState == 1) {
			if (flightState <= 5) {
				return (<p className={"completed"}>Main</p>)
			} else {
				return (<p className={"completed"} style={{color: 'red'}}>Main</p>)
			}
		} else {
			return (<p className={"not-completed"}>Main</p>)
		}
	}

	render () {
		return (
			<div style={this.divStyle} className={'grid-container'}>
				<p className={"not-completed"}>Parachutes:</p>
				{this.drogueStatus(this.state.FS, this.state.DS)}
				{this.mainStatus(this.state.FS, this.state.MS)}
			</div>
		);	
	}
}
