import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import FlightStatus from './components/FlightStatus';
import ConnectionStatus from './components/ConnectionStatus';
import ChuteStatus from './components/ChuteStatus';
import MapView from './components/MapView';
import Orientation from './components/Orientation';
import './App.css';

function App() {
  return (
    <div>
			<Header/>
      <ConnectionStatus/>
      <FlightStatus/>
      <ChuteStatus/>
      <MapView/>
      <Orientation/>
		</div>
  );
}

export default App;
