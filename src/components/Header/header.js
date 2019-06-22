import React, {Component} from 'react';
import './header.scss'

import HeaderMonth from './HeaderMonth';
import HeaderWeekDays from './HeaderWeekDays';

export default class header extends Component {

    render() {
      return (
          <React.Fragment>
              <HeaderMonth />
              <HeaderWeekDays />
          </React.Fragment>
      )
    }
  }