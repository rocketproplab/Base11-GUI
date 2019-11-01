import React from 'react';

export default class ChuteStatus extends React.Component {

	divStyle = {
		marginRight: "45%"
	};

	render () {
		return (
			<div style={this.divStyle} className={'grid-container'}>
				<h2 className={"not-completed"}>Parachutes:</h2>
				<h2 className={"not-completed"}>Drogue</h2>
				<h2 className={"not-completed"}>Main</h2>
			</div>
		);
	}
}
