import React, { Component } from 'react';
//style
import './App.css';
import styled from 'styled-components'
import ChangeTurnButton from './components/ChangeTurnButton'
import StartGameButton from './components/StartGameButton'
//react-redux
import { connect } from 'react-redux'
import { startGame } from './actions/startGame'
import { changeTurn } from './actions/changeTurn'
import { decrementWhiteTime } from './actions/decrementWhiteTime'
import { decrementBlackTime } from './actions/decrementBlackTime'
import { updateBlackTimerID } from './actions/updateBlackTimerID'
import { updateWhiteTimerID } from './actions/updateWhiteTimerID'

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
    if(this.props.turn === 'White'){//onChangeTurn is Black's turn
      clearInterval(this.props.whiteTimerID);
      const blackTimerID = setInterval(this.props.onDecrementBlackTime,1000);
      this.props.onUpdateBlackTimerID(blackTimerID);
    }else{//turn === 'Black' onChangeTurn is White's turn
      clearInterval(this.props.blackTimerID);
      const whiteTimerID = setInterval(this.props.onDecrementWhiteTime, 1000);
      this.props.onUpdateWhiteTimerID(whiteTimerID);
    }
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
            <p className="timer">{this.props.whiteMinutesRemaining} mins {this.props.whiteSecondsRemaining} secs</p>
            <p className="timer">{this.props.blackMinutesRemaining} mins {this.props.blackSecondsRemaining} secs</p>
          </div>
          <ChangeTurnButton onClick={() => this.handleChangeTurn()}>{this.props.turn}'s turn</ChangeTurnButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    turn: state.turn,
    blackMinutesRemaining: state.blackMinutesRemaining,
    blackSecondsRemaining: state.blackSecondsRemaining,
    whiteMinutesRemaining: state.whiteMinutesRemaining,
    whiteSecondsRemaining: state.whiteSecondsRemaining,
    blackTimerID: state.blackTimerID,
    whiteTimerID: state.whiteTimerID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartGame: (settedTime,whiteTimerID) => dispatch(startGame(settedTime,whiteTimerID)),
    onChangeTurn: () => dispatch(changeTurn()),
    onDecrementWhiteTime: () => dispatch(decrementWhiteTime()),
    onDecrementBlackTime: () => dispatch(decrementBlackTime()),
    onUpdateBlackTimerID: (blackTimerID) => dispatch(updateBlackTimerID(blackTimerID)),
    onUpdateWhiteTimerID: (whiteTimerID) => dispatch(updateWhiteTimerID(whiteTimerID)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
