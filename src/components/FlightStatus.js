import React from 'react';
import './FlightStatus.css';

export default class FlightStatus extends React.Component {
	statusStyle = {
		fontFamily: "Helvetica",
		marginTop: "20px",
		fontSize: "20px"
	};

	render () {
		return (
			<div style={this.statusStyle} className={'grid-container'}>
				<p className={"not-completed"}>Flight State:</p>
				<p className={"not-completed"}>Launch</p>
				<p className={"not-completed"}>Climb</p>
				<p className={"not-completed"}>Coast</p>
				<p className={"not-completed"}>Apogee</p>
				<p className={"not-completed"}>Descent</p>
				<p className={"not-completed"}>Landed</p>
			</div>
		);
	}
}
