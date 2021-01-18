import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContainer from './screens/containers/HomeContainer';
import Template from './assets/components/theme/Template';
import MembersContainer from './screens/containers/MembersContainer';
import MemberTypesContainer from './screens/containers/MemberTypesContainer';

const Routes = () => (
  <Router>
    <Switch>
      <Template>
        <Route path="/home" component={HomeContainer} />
        <Route path="/members" component={MembersContainer} />
        <Route path="/member-types" component={MemberTypesContainer} />
      </Template>
    </Switch>
  </Router>
);

export default Routes;
