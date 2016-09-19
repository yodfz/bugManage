// 核心模块载入
import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
// UI 载入
import App from '../components/App';
import NotFound from '../components/SinglePage/NotFound';
import EmptyChildren from '../components/SinglePage/EmptyChildren';
// UI 设置相关
import SinglePageMain from '../components/SinglePage/Main';

import SettingEmail from '../components/setting/email';
import SettingPhone from '../components/setting/phone';
import SettingSite from '../components/setting/site';

const Routes = ({ history }) =>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SinglePageMain} />
        <Route path="setting">
          <Route path="site" component={SettingSite}/>
          <Route path="email" component={SettingEmail}/>
          <Route path="phone" component={SettingPhone}/>
        </Route>
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  ;

//<Route path="/actived" component={App}/>
//< Route path = "/completed" component = {App} / >
//const _Routes = {
//  path: '/',
//  component: App,
//  indexRoute: {component: App}
//};

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
