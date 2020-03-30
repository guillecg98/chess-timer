import React, { Component } from 'react';
import './App.css';
import ChangeTurnButton from './components/ChangeTurnButton'
import StartGameButton from './components/StartGameButton'
import { connect } from 'react-redux'
import { startGame } from './actions/startGame';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="title">
          Chess Timer
        </div>
        <div>
          <h3>Select Game Time per Player</h3>
          <input type="number" required/>
        </div>
        <StartGameButton action={this.props.onStartGame} text="Start Game"/>
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
          <ChangeTurnButton text={this.props.turn}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    turn: state.turn,
    blackTime: state.blackTime,
    whiteTime: state.whiteTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //onActions: () => dispatch(action()),
    onStartGame: () => dispatch(startGame()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
