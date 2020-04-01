export const UPDATE_WHITE_TIMER = '@@chess/UPDATE_WHITE_TIMER'

export const updateWhiteTimerID = (whiteTimerID) => ({
    type: UPDATE_WHITE_TIMER,
    payload: whiteTimerID,
});