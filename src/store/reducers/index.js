import * as actionType from "../actions/actionTypes";
import uniqueId from "uuid/v1";

const initialState = {};

const createReminder = (prevState, action) => {
    const event = {
        id: uniqueId(),
        description: action.event.description
    };

    return {
        ...prevState,
        [action.event.date]: prevState[action.event.date]
            ? prevState[action.event.date].concat(event)
            : [event]
    };
};

const updateReminder = (prevState, action) => {
    const events = [];
    [...prevState[action.event.date]].forEach(event => {
        if (action.event.id === this.event.id) {
            event = {
                id: this.event.id,
                description: action.event.description,
            };
        }
        events.push(event);
    });

    return {
        ...prevState,
        [action.event.date]: events
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
