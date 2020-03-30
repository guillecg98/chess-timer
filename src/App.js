import React from 'react';
import './App.css';
import ChangeTurnButton from './components/ChangeTurnButton'
import StartGameButton from './components/StartGameButton'

function App() {
  return (
    <div className="App">
      <div className="title">
        Chess Timer
      </div>
      <div>
        <h3>Select Game Time per Player</h3>
        <input type="number" required/>
      </div>
      <StartGameButton text="Start Game"/>
        <div className="columnStyle">
          <p>White Player</p>
          <p>Black Player</p>
          <img src={require('./img/white-pawn.png')} alt="white pawn" height="150" width="150"/>
          <img src={require('./img/black-pawn.png')} alt="black pawn" height="150" width="150"/>
        </div>
        <div className="columnStyle">
          <p>Counter 1</p>
          <p>Counter 2</p>
        </div>
        <ChangeTurnButton text="'s Turn"/>
    </div>
  );
}

export default App;
