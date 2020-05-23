import React from 'react';

export default class ChuteStatus extends React.Component {
	divStyle = {
		marginRight: "42%",
		marginBottom: "10px"
	};
	
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
				{this.drogueStatus(this.props.fState, this.props.drogueState)}
				{this.mainStatus(this.props.fState, this.props.mainState)}
			</div>
		);	
	}
}
