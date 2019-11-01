import React from 'react';

export default class ChuteStatus extends React.Component {

	divStyle = {
		marginRight: "42%",
		marginBottom: "15px"
	};

	render () {
		return (
			<div style={this.divStyle} className={'grid-container'}>
				<p className={"not-completed"}>Parachutes:</p>
				<p className={"not-completed"}>Drogue</p>
				<p className={"not-completed"}>Main</p>
			</div>
		);
	}
}
