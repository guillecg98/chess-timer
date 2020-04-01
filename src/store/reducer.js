import { START_GAME } from '../actions/startGame'
import { CHANGE_TURN } from '../actions/changeTurn';
import { DECREMENT_WHITE } from '../actions/decrementWhiteTime'
import { DECREMENT_BLACK } from '../actions/decrementBlackTime'

const initialState = {
    turn: 'Somebody',
    blackTimeRemaining: null,
    whiteTimeRemaining: null,
    whiteTimerID: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type){

        case START_GAME: {
            return {
                ...state,
                turn: 'White',
                blackTimeRemaining: action.payload.settedTime,
                whiteTimeRemaining: action.payload.settedTime,
                whiteTimerID: action.payload.whiteTimerID,
            }
        }

        case CHANGE_TURN: {
            clearInterval(state.whiteTimerID);
            return {
                ...state,
                turn: state.turn === 'White' ? 'Black' : 'White',
            }
        }

        case DECREMENT_WHITE: {
            return {
                ...state,
                whiteTimeRemaining: state.whiteTimeRemaining - 1,
            }
        }

        case DECREMENT_BLACK: {
            return {
                ...state,
                blackTimeRemaining: state.blackTimeRemaining - 1,
            }
        }

        default: { return state; }
    }
};


export default reducer;