import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Month from '../components/Month';

const Routes = () => {
    return (
        <Switch>
            <Route path="/:year/:month" component={Month}/>
            <Route path="/" component={Month}/>
        </Switch>
    )
};

export default Routes;