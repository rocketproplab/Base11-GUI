import React from 'react';

var data = require("../data");

const heartbeat = 1000;
// const sqlite3 = require('sqlite3');
// 
// // open the database
// let db = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the telemetry database.');
// });
// 
// var data = null;
// db.serialize(() => {
// 	db.get(`SELECT * FROM telemetry ORDER BY timestamp DESC LIMIT 1`, (err, entry) => {
// 	  if (err) {
// 		console.error(err.message);
// 		return null;
// 	  }
// 	  data = entry;
// 	});
// });

export default class ConnectionStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {connectionStatus: data.connectionStatus}
	}

	format = {
		float: "right",
		marginTop: "10px",
		marginRight: "10px"
	};

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			heartbeat
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		// db.serialize(() => {
		// 	db.get(`SELECT * FROM telemetry ORDER BY timestamp DESC LIMIT 1`, (err, entry) => {
		// 	  if (err) {
		// 		console.error(err.message);
		// 		return null;
		// 	  }
		// 	  console.log("Fetched");
		// 	  data = entry;
		// 	});
		// });
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
