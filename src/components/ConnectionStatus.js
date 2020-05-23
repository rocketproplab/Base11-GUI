import React from 'react';

export default class ConnectionStatus extends React.Component {
	format = {
		float: "right",
		marginTop: "10px",
		marginRight: "10px"
	};

	render () {
		if (this.props.connectionStatus == 1) {
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
