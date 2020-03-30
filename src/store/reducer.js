import { START_GAME } from '../actions/startGame'

const initialState = {
    turn: "Somebody",
    blackTime: 0,
    whiteTime: 0,
};

const reducer = (state = initialState, action) => {
    switch(action.type){

        case START_GAME: {
            return {
                ...state,
                turn: "White",
            }
        }

        default: { return state; }
    }
};

export default reducer;