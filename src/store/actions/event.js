import * as actionTypes from "./actionTypes";

const createReminderAction = reminder => {
    return {
        type: actionTypes.CREATE_REMINDER,
        reminder
    };
};

const updateReminderAction = reminder => {
    return {
        type: actionTypes.UPDATE_REMINDER,
        reminder: reminder
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
