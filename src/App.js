import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import FlightStatus from './components/FlightStatus';
import ConnectionStatus from './components/ConnectionStatus';
import ChuteStatus from './components/ChuteStatus';
import MapView from './components/MapView';
import Orientation from './components/Orientation';
import PTView from './components/PTView';
import TCView from './components/TCView';
import BasicInfo from './components/BasicInfo';
import './App.css';
import Grid from '@material-ui/core/Grid';

const URL = 'ws://localhost:8000';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alt: 0,
			vel: 0,
            projAlt: 0,
            drogueState: 0,
			mainState: 0,
			flightState: 0,
            connectionStatus: 0,
            latitude: 0,
            longitude: 0,
            xTilt: 0,
            yTilt: 0,
            ss_1: 0,
            ss_2: 0,
            ss_3: 0,
            ss_4: 0,
            ss_5: 0,
            ss_6: 0,
            ss_7: 0,
            ss_8: 0,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            r6: 0,
            r7: 0,
            r8: 0,
            t1: 0,
            t2: 0,
            t3: 0,
            t4: 0,
            t5: 0,
            t6: 0,
            t7: 0,
            t8: 0
        }
    }
    
    ws = new WebSocket(URL)
    
    componentDidMount() {
		this.ws.onopen = () => {
      		console.log('Dashboard Connected!')
    	}
		
		this.ws.onmessage = evt => {
			var newData = JSON.parse(evt.data)
			console.log(newData)
      		this.setState({
                alt: newData.Alt,
    			vel: newData.Vel,
                projAlt: newData.ProjAlt,
                drogueState: newData.PS_drogue,
    			mainState: newData.PS_main,
    			flightState: newData.FS,
                connectionStatus: newData.connectionStatus,
                latitude: newData.Lat,
                longitude: newData.Lon,
                xTilt: newData.xTilt,
                yTilt: newData.yTilt,
                ss_1: newData.PT1_ss,
                ss_2: newData.PT2_ss,
                ss_3: newData.PT3_ss,
                ss_4: newData.PT4_ss,
                ss_5: newData.PT5_ss,
                ss_6: newData.PT6_ss,
                ss_7: newData.PT7_ss,
                ss_8: newData.PT8_ss,
                r1: newData.PT1_readout,
                r2: newData.PT2_readout,
                r3: newData.PT3_readout,
                r4: newData.PT4_readout,
                r5: newData.PT5_readout,
                r6: newData.PT6_readout,
                r7: newData.PT7_readout,
                r8: newData.PT8_readout,
                t1: newData.TC1,
                t2: newData.TC2,
                t3: newData.TC3,
                t4: newData.TC4,
                t5: newData.TC5,
                t6: newData.TC6,
                t7: newData.TC7,
                t8: newData.TC8
			});
    	};
	}
    
    render () {
        return (
            <div>
                <Header/>
                <ConnectionStatus 
                    connectionStatus={this.state.connectionStatus}/>
                <FlightStatus
                    flightState={this.state.flightState}/>
                <div style={{marginLeft: '11px'}}>
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <ChuteStatus 
                                drogueState={this.state.drogueState} 
                                mainState={this.state.mainState}
                                fState={this.state.fState}/>
                        </Grid>
                        <Grid item xs={3}>
                            <BasicInfo 
                                alt={this.state.alt} 
                                vel={this.state.vel}
                                projAlt={this.state.projAlt}/>
                        </Grid>
                    </Grid>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <PTView
                            PT1_ss = {this.state.ss_1}
                            PT1_readout = {this.state.r1}
                            PT2_ss = {this.state.ss_2}
                            PT2_readout = {this.state.r2}
                            PT3_ss = {this.state.ss_3}
                            PT3_readout = {this.state.r3}
                            PT4_ss = {this.state.ss_4}
                            PT4_readout = {this.state.r4}
                            PT5_ss = {this.state.ss_5}
                            PT5_readout = {this.state.r5}
                            PT6_ss = {this.state.ss_6}
                            PT6_readout = {this.state.r6}
                            PT7_ss = {this.state.ss_7}
                            PT7_readout = {this.state.r7}
                            PT8_ss = {this.state.ss_8}
                            PT8_readout = {this.state.r8}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TCView
                            TC1_readout = {this.state.t1}
                            TC2_readout = {this.state.t2}
                            TC3_readout = {this.state.t3}
                            TC4_readout = {this.state.t4}
                            TC5_readout = {this.state.t5}
                            TC6_readout = {this.state.t6}
                            TC7_readout = {this.state.t7}
                            TC8_readout = {this.state.t8}/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <MapView
                            latitude={this.state.latitude}
                            longitude={this.state.longitude}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Orientation
                            xTilt={this.state.xTilt}
                            yTilt={this.state.yTilt}/>
                    </Grid>
                </Grid>
    		</div>
      );
    }
}

// export default App;
