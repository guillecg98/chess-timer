import { START_GAME } from '../actions/startGame'
import { CHANGE_TURN } from '../actions/changeTurn';
import { DECREMENT_WHITE } from '../actions/decrementWhiteTime'
import { DECREMENT_BLACK } from '../actions/decrementBlackTime'
import { UPDATE_BLACK_TIMER } from '../actions/updateBlackTimerID'
import { UPDATE_WHITE_TIMER } from '../actions/updateWhiteTimerID'

const initialState = {
    turn: 'Somebody',
    blackMinutesRemaining: 0,
    blackSecondsRemaining: 0,
    whiteMinutesRemaining: 0,
    whiteSecondsRemaining: 0,
    whiteTimerID: null,
    blackTimerID: null,
};

const reducer = (state = initialState, action) => {

    var newMinute = 0;
    var newSecond = 0;
    switch(action.type){

        case START_GAME: {
            return {
                ...state,
                turn: 'White',
                blackMinutesRemaining: action.payload.settedTime - 1,
                blackSecondsRemaining: 59,
                whiteMinutesRemaining: action.payload.settedTime - 1,
                whiteSecondsRemaining: 59,
                whiteTimerID: action.payload.whiteTimerID,
            }
        }

        case CHANGE_TURN: {
            return {
                ...state,
                turn: state.turn === 'White' ? 'Black' : 'White',
            }
        }

        case DECREMENT_WHITE: {

            if(state.whiteSecondsRemaining !== 0){
                newMinute = state.whiteMinutesRemaining;
                newSecond = state.whiteSecondsRemaining - 1;
            }else{
                newMinute = state.whiteMinutesRemaining - 1;
                newSecond = 60;
            }
            return {
                ...state,
                whiteMinutesRemaining: newMinute,
                whiteSecondsRemaining: newSecond,
            }
        }

        case DECREMENT_BLACK: {

            if(state.blackSecondsRemaining !== 0){
                newMinute = state.blackMinutesRemaining;
                newSecond = state.blackSecondsRemaining - 1;
            }else{
                newMinute = state.blackMinutesRemaining - 1;
                newSecond = 60;
            }

            return {
                ...state,
                blackMinutesRemaining: newMinute,
                blackSecondsRemaining: newSecond ,
            }
        }

        case UPDATE_BLACK_TIMER: {
            return {
                ...state,
                blackTimerID: action.payload,
            }
        }

        case UPDATE_WHITE_TIMER: {
            return {
                ...state,
                whiteTimerID: action.payload,
            }
        }

        default: {
             return state;
        }

    }
};

export default reducer;