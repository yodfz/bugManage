import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import NotFound from '../components/NotFound';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>;

//<Route path="/actived" component={App}/>
//<Route path="/completed" component={App}/>
//const _Routes = {
//  path: '/',
//  component: App,
//  indexRoute: {component: App}
//};

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
