import React from 'react';
import './headerWeekDays.scss'

const headerWeekDays = props => (
    <header className="weekdays d-flex flex-wrap">
        {props.days.map((weekday, i) => (
            <strong key={i}>{weekday}</strong>
        ))}
    </header>
);

export default headerWeekDays;

