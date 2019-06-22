import React from 'react';
import {Link} from "react-router-dom";
import './headerMonth.scss'

const headerMonth = props => (
    <header className="month-header my-4">
        <h1>{props.curMonth.name}</h1>
        <div className="button-wrapper">
            <Link to={"/" + props.prevMonth.slug}>
                <i className="fas fa-chevron-left fa-lg"/>
            </Link>
            <Link to={"/" + props.curMonth.slug}>
                <span>Current</span>
            </Link>
            <Link to={"/" + props.nextMonth.slug}>
                <i className="fas fa-chevron-right fa-lg"/>
            </Link>
        </div>
    </header>
);

export default headerMonth;
