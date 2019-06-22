import * as actionTypes from "./actionTypes";

const createReminderAction = event => {
    return {
        type: actionTypes.CREATE_REMINDER,
        event
    };
};

const updateReminderAction = event => {
    return {
        type: actionTypes.UPDATE_REMINDER,
        event
    };
};


export const createReminder = payload => {
    return dispatch => {
        dispatch(createReminderAction(payload));
    };
};

export const updateReminder = payload => {
    return dispatch => {
        dispatch(updateReminderAction(payload));
    };
};
