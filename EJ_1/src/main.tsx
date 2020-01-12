import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { switchRoutes } from './core';

import { HashRouter, Switch, Route } from 'react-router-dom';
import {App} from './app';
import { DetailMember } from './components';

ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* <Route exact={true} path="/" component={App} /> */}
      <Route exact={true} path={switchRoutes.root} component={App} />
      <Route path="/detailMember/:id" component={DetailMember} />
      {/* <Route path={switchRoutes.detailMember} component={DetailMember} /> */}
    </Switch>
  </HashRouter>,
  
  document.getElementById('root')
);
