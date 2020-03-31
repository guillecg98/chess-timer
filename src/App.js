import React, { Component } from 'react';
import './App.css';
import ChangeTurnButton from './components/ChangeTurnButton'
import StartGameButton from './components/StartGameButton'
import { connect } from 'react-redux'
import { startGame } from './actions/startGame'
import { changeTurn } from './actions/changeTurn'
import styled from 'styled-components'

const Input = styled.input`
  justify-content: center;
  font-size: 18px;
  padding: 14px;
  border-color: lightslategray;
  border-radius: 3px;
  ::placeholder {
    color: lightslategray;
  }
`;

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="title">
          Chess Timer
        </div>
        <div>
          <Input id="time" type="number" placeholder="Minutes"/>
        </div>
        <StartGameButton action={() => this.props.onStartGame(document.getElementById('time').value)} text="Start Game"/>
          <div className="columnStyle">
            <p>White Player</p>
            <p>Black Player</p>
            <img src={require('./img/white-pawn.png')} alt="white pawn" height="150" width="150"/>
            <img src={require('./img/black-pawn.png')} alt="black pawn" height="150" width="150"/>
          </div>
          <div className="columnStyle">
          <p className="timer">{this.props.whiteTimeRemaining}</p>
            <p className="timer">{this.props.blackTimeRemaining}</p>
          </div>
          <ChangeTurnButton action={this.props.onChangeTurn} text={this.props.turn}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    turn: state.turn,
    blackTimeRemaining: state.blackTimeRemaining,
    whiteTimeRemaining: state.whiteTimeRemaining,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //onActions: () => dispatch(action()),
    onStartGame: (settedTime) => dispatch(startGame(settedTime)),
    onChangeTurn: () => dispatch(changeTurn()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
