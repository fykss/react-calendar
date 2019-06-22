import React from 'react';
import { connect } from "react-redux";
import './day.scss'
import _sortBy from "lodash/sortBy";
import * as actions from "../../store/actions";

import Reminder from './DayEvent'
import DayEventForm from './DayEventForm'

class Day extends React.Component {
    state = {
        editReminder: {
            id: null
        }
    };

    handleSetEdit = reminder => {
        this.props.handleSetEditDay(this.props.day);

        this.setState({
            editReminder: {
                ...this.state.editReminder,
                ...reminder
            }
        });
    };

    handleCreateUpdateReminder = (e, update) => {
        e.preventDefault();

        const form = e.target;
        const description = form.querySelector(".description").value.trim();

        if (description.length) {
            const payload = {
                date: this.props.date,
                description: description,
            };

            if (update.id) {
                payload["id"] = update.id;
                this.props.updateReminder(payload);
            } else {
                this.props.createReminder(payload);
            }

            this.props.handleSetEditDay(null);
            this.setState({ editReminder: {} });
        }
    };

    render() {
        const reminders =
            _sortBy(this.props.reminders[this.props.date], "time") || [];

        const cssClasses = this.props.firstDayIndex
            ? `day first-index-${this.props.firstDayIndex}`
            : "day";

        return (
            <article className={cssClasses}>
                {!this.props.editDay && (
                    <button
                        className="btn btn-new-reminder"
                        onClick={() => this.props.handleSetEditDay(this.props.day)}
                    >
                        <i className="fas fa-plus fa-2x"/>
                    </button>
                )}

                {this.props.editDay === this.props.day ? (
                    <DayEventForm
                        reminder={this.state.editReminder}
                        handleSetEditDay={this.props.handleSetEditDay}
                        handleCreateUpdateReminder={this.handleCreateUpdateReminder}
                    />
                ) : (
                    <React.Fragment>
                        <header>{this.props.day}</header>

                        {reminders.length
                            ? reminders.map((reminder, i) => {
                                return (
                                    <Reminder
                                        key={i}
                                        reminder={reminder}
                                        handleSetEdit={this.handleSetEdit}
                                    />
                                );
                            })
                            : null}
                    </React.Fragment>
                )}
            </article>
        );
    }
}

const mapStateToProps = state => {
    return {
        reminders: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createReminder: payload => dispatch(actions.createReminder(payload)),
        updateReminder: payload => dispatch(actions.updateReminder(payload)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Day);

