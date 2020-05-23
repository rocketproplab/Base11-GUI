import React from 'react';

const URL = 'ws://localhost:8000';

export default class ChuteStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drogueState: 0,
			mainState: 0,
			fState: 0
		}

	}
	divStyle = {
		marginRight: "42%",
		marginBottom: "10px"
	};

	ws = new WebSocket(URL)
	
	componentDidMount() {
		this.ws.onopen = () => {
      		console.log('chutestatus module connected')
    	}
		
		this.ws.onmessage = evt => {
			var newData = JSON.parse(evt.data)
			console.log(newData)
      		this.setState({
				drogueState: newData.PS_drogue,
				mainState: newData.PS_main,
				fState: newData.FS
			});
    	};
	}
	
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
				{this.drogueStatus(this.state.fState, this.state.drogueState)}
				{this.mainStatus(this.state.fState, this.state.mainState)}
			</div>
		);	
	}
}
