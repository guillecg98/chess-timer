import { START_GAME } from '../actions/startGame'
import { CHANGE_TURN } from '../actions/changeTurn';
import { DECREMENT_WHITE } from '../actions/decrementWhiteTime'

const initialState = {
    turn: 'Somebody',
    blackTimeRemaining: null,
    whiteTimeRemaining: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type){

        case START_GAME: {

            setInterval(() => this.props.onDecrementWhiteTime, 1000);
            return {
                ...state,
                turn: 'White',
                blackTimeRemaining: action.payload,
                whiteTimeRemaining: action.payload,
            }
        }

        case CHANGE_TURN: {

            clearInterval();
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

        default: { return state; }
    }
};


export default reducer;