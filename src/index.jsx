import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import routes from './routes';

const store = configureStore();
console.log(store.getState());

// Styles
import './styles/app.scss';

render((
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
), document.getElementById('app'));
