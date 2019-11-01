import React from 'react';

export default class ConnectionStatus extends React.Component {
	format = {
		float: "right",
		marginTop: "10px",
		marginRight: "10px"
	};

	render () {
		return (
			<div style={this.format}>
				Connection Board: Connected
			</div>
		);
	}
}
