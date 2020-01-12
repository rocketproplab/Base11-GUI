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
import './App.css';
import Grid from '@material-ui/core/Grid';

// TODO: Swap map and valve table

function App() {
    return (
        <div>
            <Header/>
            <ConnectionStatus/>
            <FlightStatus/>
            <ChuteStatus/>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <PTView/>
                </Grid>
                <Grid item xs={6}>
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
