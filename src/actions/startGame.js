export const START_GAME = '@@chess/START_GAME'

export const startGame = (settedTime,whiteTimerID) => ({
    type: START_GAME,
    payload: {settedTime,whiteTimerID}
});