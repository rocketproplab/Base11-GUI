import React from 'react';
import './FlightStatus.css';
import { useState, useEffect } from 'react';

export default class FlightStatus extends React.Component {
	// getWindowDimensions() {
	//   const { innerWidth: width, innerHeight: height } = window;
	//   return {
	//     width
	//   };
	// }
	statusStyle = {
		fontFamily: "Helvetica",
		marginTop: "20px",
		fontSize: "20px"
	};

	render () {
		return (
			<div style={this.statusStyle} className={'grid-container'}>
				<h2 className={"not-completed"}>Flight State:</h2>
				<h2 className={"not-completed"}>Launch</h2>
				<h2 className={"not-completed"}>Climb</h2>
				<h2 className={"not-completed"}>Coast</h2>
				<h2 className={"not-completed"}>Apogee</h2>
				<h2 className={"not-completed"}>Descent</h2>
				<h2 className={"not-completed"}>Landed</h2>
			</div>
		);
	}
}
