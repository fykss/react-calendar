import * as actionType from "../actions/actionTypes";
import uniqueId from "uuid/v1";

const initialState = {};

const createReminder = (prevState, action) => {
    const reminder = {
        id: uniqueId(),
        description: action.reminder.description
    };

    return {
        ...prevState,
        [action.reminder.date]: prevState[action.reminder.date]
            ? prevState[action.reminder.date].concat(reminder)
            : [reminder]
    };
};

const updateReminder = (prevState, action) => {
    const reminders = [];
    [...prevState[action.reminder.date]].forEach(reminder => {
        if (action.reminder.id === reminder.id) {
            reminder = {
                id: reminder.id,
                time: action.reminder.time,
                description: action.reminder.description,
                color: action.reminder.color
            };
        }
        reminders.push(reminder);
    });

    return {
        ...prevState,
        [action.reminder.date]: reminders
    };
};

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case actionType.CREATE_REMINDER:
            return createReminder(prevState, action);
        case actionType.UPDATE_REMINDER:
            return updateReminder(prevState, action);
        default:
            return prevState;
    }
};


export default reducer;
