import React from 'react';

export default class ConnectionStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {connectionStatus: this.props.connectionStatus}
	}
	format = {
		float: "right",
		marginTop: "10px",
		marginRight: "10px"
	};

	render () {
		if (this.props.connectionStatus == "Connected") {
			return (
				<div style={this.format}>
					Command Board: <span style={{color: "green"}}>{this.state.connectionStatus}</span>
				</div>
			);
		} else {
			return (
				<div style={this.format}>
					Command Board: <span style={{color: "red"}}>{this.state.connectionStatus}</span>
				</div>
			);
		}
	}
}
