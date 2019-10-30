import React from 'react';

export default class FlightStatus extends React.Component {
	statusStyle = {
		fontFamily: "Helvetica"
	};

	statusElement = (
		<h2 style={this.statusStyle}>{this.props.status}</h2>
	);

	render () {
		return this.statusElement;
	}
}
