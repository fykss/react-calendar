import React from 'react';
import './dayEvent.scss'

const reminder = props => (
    <article className="reminder">
        <strong>{props.reminder.description}</strong>
    </article>
);

export default reminder;