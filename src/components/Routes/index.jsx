import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from '../../pages/Home';
import Login from '../../pages/Login';

function Routes() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
      {background && <Route path="/login" component={Login} />}
    </>
  );
}

export default Routes;
