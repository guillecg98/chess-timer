import { START_GAME } from '../actions/startGame'
import { CHANGE_TURN } from '../actions/changeTurn';

const initialState = {
    turn: 'Somebody',
    blackTimeRemaining: null,
    whiteTimeRemaining: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type){

        case START_GAME: {
            return {
                ...state,
                turn: 'White',
                blackTimeRemaining: action.payload,
                whiteTimeRemaining: action.payload,
            }
        }

        case CHANGE_TURN: {
            return {
                ...state,
                turn: state.turn === 'White' ? 'Black' : 'White',
            }
        }

        default: { return state; }
    }
};

export default reducer;