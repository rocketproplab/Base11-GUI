'use strict';

// Frequency of updates for the flight status, in ms
const waitTime = 1000;

function constUpdate() {
	const headerStyle = {
    	backgroundColor: "#4B4B4B",
    	margin: "0px",
    	padding: "0px",
    	height: "75px",
    	width: "1440px",
    	color: "#FFFFFF",
    	borderRadius: "0px",
    	fontFamily: "Helvetica",
	};

	const element = (
    	<div style={headerStyle}>
      		<span style={{textAlign: "right", float: "right", paddingRight: "20px", marginTop: "20px", fontSize: "14px"}}>
        		{new Date().getMonth()}/{new Date().getDay()}/{new Date().getFullYear()} <br></br> {new Date().toLocaleTimeString()} UTC-{new Date().getTimezoneOffset() / 60}
      		</span>
      		<span style={{float: "left", padding: "5px"}}>
        		<img src="./imgs/RPL-logo.png" height="65px" width="175px"></img>
      		</span>
      		<span style={{textAlign: "center", display: "table", margin: "auto", alignContent: "center", paddingTop: "30px", marginTop: "0px", fontSize: "20px"}}>
        		Base-11 Telemetry Dashboard
      		</span>
    	</div>
  	);

  	ReactDOM.render(element, document.getElementById('top_header_container'));
}

setInterval(constUpdate, waitTime);