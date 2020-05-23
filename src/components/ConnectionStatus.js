import React from 'react';

const URL = 'ws://localhost:8000';

export default class ConnectionStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {connectionStatus: 0}
	}
	
	ws = new WebSocket(URL)

	format = {
		float: "right",
		marginTop: "10px",
		marginRight: "10px"
	};

	componentDidMount() {
		this.ws.onopen = () => {
      		console.log('connected')
    	}
		
		this.ws.onmessage = evt => {
      		this.setState({
				connectionStatus: JSON.parse(evt.data).connectionStatus
			});
    	};
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
