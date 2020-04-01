export const UPDATE_BLACK_TIMER = '@@chess/UPDATE_BLACK_TIMER'

export const updateBlackTimerID = (blackTimerID) => ({
    type: UPDATE_BLACK_TIMER,
    payload: blackTimerID,
});