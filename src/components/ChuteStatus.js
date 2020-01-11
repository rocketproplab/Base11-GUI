import React from 'react';

const heartbeat = 1000;
var data = require("../data");

export default class ChuteStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drogueState: data.PS_drogue,
			mainState: data.PS_main
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

	render () {
		if (this.state.drogueState == "1") {
			return (
				<div style={this.divStyle} className={'grid-container'}>
					<p className={"not-completed"}>Parachutes:</p>
					<p className={"completed"}>Drogue</p>
					<p className={"not-completed"}>Main</p>
				</div>
			);
		} else {
			return (
				<div style={this.divStyle} className={'grid-container'}>
					<p className={"not-completed"}>Parachutes:</p>
					<p className={"not-completed"}>Drogue</p>
					<p className={"not-completed"}>Main</p>
				</div>
			);
		}
	}
}
