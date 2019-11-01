import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import FlightStatus from './components/FlightStatus';
import ConnectionStatus from './components/ConnectionStatus';
import ChuteStatus from './components/ChuteStatus';
import MapView from './components/MapView';
import './App.css';

function App() {
  return (
    <div>
			<Header/>
      <ConnectionStatus connectionStatus="Connected"/>
      <FlightStatus/>
      <ChuteStatus/>
      <MapView/>
		</div>
  );
}

export default App;
