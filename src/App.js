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

var persist = window.localStorage

function App() {
    return (
        <div>
            <Header/>
            <ConnectionStatus/>
            <FlightStatus/>
            <div style={{marginLeft: '11px'}}>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <ChuteStatus/>
                    </Grid>
                    <Grid item xs={3}>
                        <BasicInfo/>
                    </Grid>
                </Grid>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <PTView/>
                </Grid>
                <Grid item xs={4}>
                    <TCView/>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <MapView/>
                </Grid>
                <Grid item xs={4}>
                    <Orientation/>
                </Grid>
            </Grid>
		</div>
  );
}

export default App;
