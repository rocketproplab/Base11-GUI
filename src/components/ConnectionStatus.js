import React from 'react';

const heartbeat = 1000;
var data = require('../data');

export default class ConnectionStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {connectionStatus: data.connectionStatus}
	}

	format = {
		float: "right",
		marginTop: "10px",
		marginRight: "10px"
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
		if (this.state.connectionStatus == 1) {
			return (
				<div style={this.format}>
					Command Board: <span style={{color: "green"}}>Connected</span>
				</div>
			);
		} else {
			return (
				<div style={this.format}>
					Command Board: <span style={{color: "red"}}>Not Connected</span>
				</div>
			);
		}
	}
}
