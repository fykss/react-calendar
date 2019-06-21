import React from 'react';
import './dayEventForm.scss'

const reminderForm = props => {
    return (
        <form
            method="post"
            onSubmit={e => props.handleCreateUpdateReminder(e, props.reminder)}
        >
      <textarea
          className="description"
          placeholder="Reminder"
          maxLength="30"
          defaultValue={props.reminder.description}
      />

            <button className="btn-submit">Submit</button>

            <button
                className="btn-cancel"
                onClick={() => props.handleSetEditDay(null)}
            >
                Cancel
            </button>
        </form>
    );
};

export default reminderForm;