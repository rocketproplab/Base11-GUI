import React from 'react';
import './FlightStatus.css';

export default class FlightStatus extends React.Component {
	statusStyle = {
		fontFamily: "Helvetica",
		marginTop: "20px",
		fontSize: "20px"
	};
	
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
				{this.launchIndicator(this.props.flightState)}
				{this.climbIndicator(this.props.flightState)}
				{this.coastIndicator(this.props.flightState)}
				{this.apogeeIndicator(this.props.flightState)}
				{this.descentIndicator(this.props.flightState)}
				{this.landedIndicator(this.props.flightState)}
			</div>
		);
	}
}
