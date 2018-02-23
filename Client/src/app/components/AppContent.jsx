import React from 'react';
import CustomScroll from 'react-custom-scroll';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Routes from '../routes';
import { NotFound } from '../../error/NotFound';
import { Forbidden } from '../../error/Forbidden';
import { Home } from '../../home/Home';
import TableContainer from '../../tableView/TableContainer';
// import {
//   userIsAuthenticatedRedirect,
//   userIsNotAuthenticatedRedirect,
//   userIsAdminRedirect,
// } from '../../auth/authWrappers';

import './AppContent.scss';
import './customScroll.scss';

const AppContent = ({ className }) => (
  <div className={'main ' + className}>
    <CustomScroll flex="1">
      <Switch>
        <Route path={Routes.Forbidden.path} component={Forbidden} />
        <Route exact path={Routes.Main.path} component={Home}/>
        <Route path={Routes.DB.path} component={TableContainer} />
        <Route component={NotFound} />
      </Switch>
    </CustomScroll>
  </div>
);

AppContent.propTypes = {
  className : PropTypes.string,
};

export default AppContent;
