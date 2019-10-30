import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import FlightStatus from './components/FlightStatus';
import './App.css';

function App() {
  return (
    <div>
			<Header/>
      <Header/>
			<div>
				<FlightStatus status="Launch"/>
				<FlightStatus status="Coast"/>
			</div>
		</div>
  );
}

export default App;
