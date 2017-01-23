import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

// Routes
import routes from './routes'

// Styles
import './css/test.scss';

render((
  <Router history={browserHistory} routes={routes} />
), document.getElementById('app'));
