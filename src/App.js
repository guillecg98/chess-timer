import React, { Component } from 'react';
import './App.css';
import ChangeTurnButton from './components/ChangeTurnButton'
import StartGameButton from './components/StartGameButton'
import { connect } from 'react-redux'
import { startGame } from './actions/startGame'
import { changeTurn } from './actions/changeTurn'
import styled from 'styled-components'
import { decrementWhiteTime } from './actions/decrementWhiteTime'
import { decrementBlackTime } from './actions/decrementBlackTime'

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

  handleStartGame = (id) => {
    const settedTime = document.getElementById(id).value;
    const whiteTimerID = setInterval(this.props.onDecrementWhiteTime, 1000);
    this.props.onStartGame(settedTime,whiteTimerID);
  };

  handleChangeTurn(){
    this.props.onChangeTurn();
  }

  render(){
    return (
      <div className="App">
        <div className="title">
          Chess Timer
        </div>
        <div>
          <Input id="time" type="number" placeholder="Minutes"/>
        </div>
        <StartGameButton onClick={() => this.handleStartGame('time')}>Start Game</StartGameButton>
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
          <ChangeTurnButton onClick={this.props.onChangeTurn}>{this.props.turn}' turn</ChangeTurnButton>
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
    onStartGame: (settedTime,whiteTimerID) => dispatch(startGame(settedTime,whiteTimerID)),
    onChangeTurn: () => dispatch(changeTurn()),
    onDecrementWhiteTime: () => dispatch(decrementWhiteTime()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
